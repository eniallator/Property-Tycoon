"use strict";
// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 *
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
exports.__esModule = true;
var state_1 = require("./state");
var Cmd = require("./command");
var util_1 = require("../util");
/**
 * Core class. Responsible for mapping [[GameState]] to new GameState given some input commands
 */
var Core = /** @class */ (function () {
    function Core() {
        // Initialize Core
    }
    /**
     * Update the game states with game logic, given some input commands
     * @param state Current game state to uodate
     * @param cmd Command to process and update state with respect to
     */
    Core.prototype.update = function (state, cmd) {
        var type = cmd.type, data = cmd.data;
        var updates = {};
        switch (type) {
            case Cmd.CommandType.ROLL:
                updates = CoreM.move(cmd.data, state);
                break;
        }
        return util_1["default"].update(state, updates);
    };
    return Core;
}());
exports.Core = Core;
// Module functions
var CoreM;
(function (CoreM) {
    /**
     * Moves player on board according to dice rolled
     * @param data Data held by the roll command (value of two dice)
     * @param state Current state of the game
     */
    function move(data, state) {
        var _a = data.dice, die1 = _a[0], die2 = _a[1];
        var activePlayer = state.activePlayer;
        return state_1.StateM.movePlayer(state, die1 + die2);
    }
    CoreM.move = move;
})(CoreM || (CoreM = {}));
