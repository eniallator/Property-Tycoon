"use strict";
// game-command.ts
/**
 * Game Command Schema
 * Game commands are how the Input module communicates with the Logic Core
 *
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
exports.__esModule = true;
/**
 * Command types:
 * - `ROLL`: Player has rolled their die
 */
var CommandType;
(function (CommandType) {
    CommandType[CommandType["ROLL"] = 0] = "ROLL";
})(CommandType || (CommandType = {}));
exports.CommandType = CommandType;
