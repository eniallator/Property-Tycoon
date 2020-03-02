"use strict";
// player.ts
/**
 * Definition of Player
 *
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
exports.__esModule = true;
var util_1 = require("../util");
// Token
/**
 * Players avatar when moving around the board:
 * - `BOOT`
 * - `SMARTPHONE`
 * - `GOBLET`
 * - `HATSTAND`
 * - `CAT`
 * - `SPOON`
 */
var Token;
(function (Token) {
    Token[Token["BOOT"] = 0] = "BOOT";
    Token[Token["SMARTPHONE"] = 1] = "SMARTPHONE";
    Token[Token["GOBLET"] = 2] = "GOBLET";
    Token[Token["HATSTAND"] = 3] = "HATSTAND";
    Token[Token["CAT"] = 4] = "CAT";
    Token[Token["SPOON"] = 5] = "SPOON";
})(Token || (Token = {}));
exports.Token = Token;
// Utility functions and types
var PlayerM;
(function (PlayerM) {
    function createPlayer(id, token) {
        return {
            id: id,
            token: token,
            position: 0,
            cash: 0,
            properties: new Set(),
            inJail: false,
            outOfJailCard: '' // TODO
        };
    }
    PlayerM.createPlayer = createPlayer;
    /**
     * Moves player position by `n` steps
     * @param n Number of steps to move
     * @param player Player whose position will be moved
     */
    function move(n, player) {
        var updates = { position: n };
        return util_1["default"].update(player, updates);
    }
    PlayerM.move = move;
})(PlayerM || (PlayerM = {}));
exports.PlayerM = PlayerM;
