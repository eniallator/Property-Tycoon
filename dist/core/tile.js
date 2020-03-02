"use strict";
// tile.ts
/**
 * Definition of Tile
 *
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
exports.__esModule = true;
// Corner Tile
/**
 * Corner types. These are the four unique corner tiles on the boeard:
 */
var CornerType;
(function (CornerType) {
    CornerType[CornerType["GO"] = 0] = "GO";
    CornerType[CornerType["JAIL"] = 1] = "JAIL";
    CornerType[CornerType["PARKING"] = 2] = "PARKING";
    CornerType[CornerType["GO_TO_JAIL"] = 3] = "GO_TO_JAIL";
})(CornerType || (CornerType = {}));
// Estate
/**
 * Estate property groups
 */
var EstateGroup;
(function (EstateGroup) {
    EstateGroup[EstateGroup["BLUE"] = 0] = "BLUE";
    EstateGroup[EstateGroup["PURPLE"] = 1] = "PURPLE";
    EstateGroup[EstateGroup["ORANGE"] = 2] = "ORANGE";
    EstateGroup[EstateGroup["RED"] = 3] = "RED";
    EstateGroup[EstateGroup["YELLOW"] = 4] = "YELLOW";
    EstateGroup[EstateGroup["GREEN"] = 5] = "GREEN";
    EstateGroup[EstateGroup["DEEP_BLUE"] = 6] = "DEEP_BLUE";
})(EstateGroup || (EstateGroup = {}));
// Functions
var TileM;
(function (TileM) {
    /**
     * Creates a new tle
     * @param position Tile's position
     */
    function createTile(position) {
        return {
            position: position
        };
    }
    TileM.createTile = createTile;
})(TileM || (TileM = {}));
exports.TileM = TileM;
