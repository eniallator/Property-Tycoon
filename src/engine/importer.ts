// importer.ts
/**
 * Data importer. Imports game data from the csv files provided by Watson Games
 * 
 * authors: Alexandru C.
 * @packageDocumentation
 */

import { Tile, TileM, CornerType, EstateGroup } from '../game_data/tile'
import * as fs from 'fs';


// Global variables
const filePathBoardData = 'data/setup/PropertyTycoonBoardData.csv';
const filePathCardData = 'data/setup/PropertyTycoonCardData.csv';

// corner tiles [1: GO, 11: JAIL, 21: PARKING, 31: GO_TO_JAIL]
const taxTilePositions = [5, 39]
const potTilePositions = [3, 18, 34]
const utilityTilePositions = [13, 29]
const stationTilePositions = [6, 16, 26, 36]
const opportunityTilePositions = [8, 23, 37]
const estateTilePositions = [2, 4, 7, 9, 10, 12, 14, 15, 17, 19, 20, 22, 24, 25, 27, 28, 30, 32, 33, 35, 38, 40]


// Module functions
namespace ImporterM {
    /**
     * Iterates over the pre-processed tile data and creates Tiles.
     * Returns a list of (sub-types of) Tile 
     */
    export function getTiles(): Array<Tile> {
        const parsedData = parseCSVTileData()

        const tiles = []

        // Iterate over objects representing pre-processed tiles
        for (const index in parsedData) {
            const tileData = parsedData[index]

            // Corner tiles
            if (tileData['Position'] == 1) { tiles.push(TileM.createCornerTile(1, CornerType.GO)) }
            else if (tileData['Position'] == 11) { tiles.push(TileM.createCornerTile(1, CornerType.JAIL)) }
            else if (tileData['Position'] == 21) { tiles.push(TileM.createCornerTile(1, CornerType.PARKING)) }
            else if (tileData['Position'] == 31) { tiles.push(TileM.createCornerTile(1, CornerType.GO_TO_JAIL)) }

            // Utility tiles
            else if (utilityTilePositions.includes(tileData['Position'])) {
                tiles.push(TileM.createUtilityTile(tileData['Position'], tileData['Space/property'], tileData['Cost'], 1)) // TODO: Rent does not really make sense hardcoded here
            }

            // Station tiles
            else if (stationTilePositions.includes(tileData['Position'])) {
                tiles.push(TileM.createStationTile(tileData['Position'], tileData['Space/property'], tileData['Cost'], 1)) // TODO: Rent does not really make sense hardcoded here
            }

            // Tax tiles
            else if (taxTilePositions.includes(tileData['Position'])) {
                tiles.push(TileM.createTaxTile(tileData['Position'], Number(tileData['Action'].match(/\d+/))))
            }

            // Opportunity tiles
            else if (opportunityTilePositions.includes(tileData['Position'])) {
                tiles.push(TileM.createChanceTile(tileData['Position'], 0))
            }

            // Pot tiles
            else if (potTilePositions.includes(tileData['Position'])) {
                tiles.push(TileM.createChanceTile(tileData['Position'], 1))
            }

            // Estate tiles
            else if (estateTilePositions.includes(tileData['Position'])) {
                // Estate group
                var group = EstateGroup.BLUE // TODO: REFACTOR THIS. SHOULD NOT INITIALISE WITH A SPECIFIC VALUE
                switch (tileData['Group']) {
                    case 'Blue': group = EstateGroup.BLUE; break
                    case 'Brown': group = EstateGroup.BROWN; break
                    case 'Deep blue': group = EstateGroup.DEEP_BLUE; break
                    case 'Green': group = EstateGroup.GREEN; break
                    case 'Orange': group = EstateGroup.ORANGE; break
                    case 'Purple': group = EstateGroup.PURPLE; break
                    case 'Red': group = EstateGroup.RED; break
                    case 'Yellow': group = EstateGroup.YELLOW; break
                }

                // Rents from 0(no improvements) to 5(hotel)
                var rents = [tileData['Rent'], tileData['Rent1'], tileData['Rent2'], tileData['Rent3'], tileData['Rent4'], tileData['Rent5']]

                // Initialise without improvements and not mortgaged
                tiles.push(TileM.createEstateTile(tileData['Position'], tileData['Space/property'], tileData['Cost'], group, rents, 0, false))
            }

            // All tiles should be processed by the above. TODO: Raise error if the line below is reached
            else console.log('WARNING [importer]: Tile' + tileData + 'was not initialised properly')
        }

        return tiles
    }


    /**
     * Parses the board data csv file and extracts tile data.
     * Returns a list of objects with pre-processed tile information.
     */
    function parseCSVTileData() {
        const lines = fs.readFileSync(filePathBoardData, 'utf-8').split('\n')
        const header = lines[3].split(',')
        // Name columns for clearer indexing
        header[7] = 'Cost'
        header[8] = 'Rent'
        header[10] = 'Rent1'
        header[11] = 'Rent2'
        header[12] = 'Rent3'
        header[13] = 'Rent4'
        header[14] = 'Rent5'

        // List of columns that contain numerical data
        const numericalFields = [
            header[0], //position
            header[7], //cost
            header[8], //rent
            header[10],//1hous
            header[11],//2hous
            header[12],//3hous
            header[13],//4hous
            header[14],//hotel
        ]

        // List to save the pre-processed tile objects
        const parsedTiles = []

        // Iterate through the lines that contain tile data
        for (var lineNo = 4; lineNo < 44; lineNo++) { // lines 4 to 44 are tiles
            const tileRow = lines[lineNo].split(',')
            const tileData = {}

            // Iterate through columns
            for (var colNo = 0; colNo < tileRow.length; colNo++) {

                // Rxclude cells with no data or no header
                if (tileRow[colNo] == '' || header[colNo] == '') { continue }

                // Cast 'Yes'/'No' to Boolean 
                else if (header[colNo] == 'Can be bought?') {
                    if (tileRow[colNo] == 'Yes') tileData[header[colNo]] = true
                    else { tileData[header[colNo]] = false; continue }
                }

                // Cast content of numeral cells to Number
                else if (numericalFields.includes(header[colNo])) { tileData[header[colNo]] = Number(tileRow[colNo]) }

                // Save every other cell as string
                else { tileData[header[colNo]] = tileRow[colNo]; }
            }
            parsedTiles.push(tileData)
        }
        return (parsedTiles)
    }
}


export { ImporterM }