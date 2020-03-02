"use strict";
// game-state.ts
/**
 * Definition of Game State
 *
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
exports.__esModule = true;
var player_1 = require("./player");
var tile_1 = require("./tile");
var util_1 = require("../util");
// Game Phase
/**
 * Represents current event the game is in:
 * - `PLAYER_MOVE`: A player is moving around the board
 * - `MAIN_MENU`: TODO
 * - `PAUSE_MENU`: TODO
 * - `BUY_PROPERTY`: TODO
 * - `AUCTION`: TODO
 * - `PAY_RENT`: TODO
 * - `PROPERTY_MANAGEMENT`: TODO
 * - `END_GAME`: TODO
 */
var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["PLAYER_MOVE"] = 0] = "PLAYER_MOVE";
})(GamePhase || (GamePhase = {}));
exports.GamePhase = GamePhase;
// Module functions
var StateM;
(function (StateM) {
    /**
     * Creates a new game state.
     * TODO:
     * - Update behaviour from sprint 1
     */
    function createGameState(numTiles) {
        if (numTiles === void 0) { numTiles = 40; }
        var tiles = [];
        for (var i = 0; i < numTiles; ++i) {
            tiles.push(tile_1.TileM.createTile(i));
        }
        var p1 = player_1.PlayerM.createPlayer(0, player_1.Token.BOOT);
        var p2 = player_1.PlayerM.createPlayer(1, player_1.Token.GOBLET);
        var p3 = player_1.PlayerM.createPlayer(2, player_1.Token.HATSTAND);
        var p4 = player_1.PlayerM.createPlayer(3, player_1.Token.SMARTPHONE);
        var p5 = player_1.PlayerM.createPlayer(4, player_1.Token.SPOON);
        var p6 = player_1.PlayerM.createPlayer(5, player_1.Token.CAT);
        var players = [p1, p2, p3, p4, p5, p6];
        return {
            gamePhase: GamePhase.PLAYER_MOVE,
            activePlayer: 0,
            players: players,
            tiles: tiles
        };
    }
    StateM.createGameState = createGameState;
    /**
     * Shifts game to next turn by moving to next player
     * @param state Current game state
     */
    function nextTurn(state) {
        var activePlayer = state.activePlayer, players = state.players;
        var numPlayers = players.length;
        var updates = { activePlayer: (activePlayer + 1) % numPlayers };
        return util_1["default"].update(state, updates);
    }
    StateM.nextTurn = nextTurn;
    /**
     * Moves the current `activePlayer` `steps` steps around the board
     * @param state Current game state
     * @param steps Steps to move player
     */
    function movePlayer(state, steps) {
        var activePlayer = state.activePlayer, players = state.players, tiles = state.tiles;
        var currentPlayer = players[activePlayer];
        var numTiles = tiles.length;
        var newPos = currentPlayer.position + steps;
        var actualPos;
        if (newPos < 0) {
            actualPos = numTiles + (newPos % numTiles);
        }
        else {
            actualPos = newPos % numTiles;
        }
        console.log("Actual Steps: " + actualPos + " Steps: " + steps + " Newpos: " + newPos);
        players[activePlayer] = player_1.PlayerM.move(actualPos, currentPlayer);
        var updates = { players: players };
        return util_1["default"].update(state, updates);
    }
    StateM.movePlayer = movePlayer;
})(StateM || (StateM = {}));
exports.StateM = StateM;
