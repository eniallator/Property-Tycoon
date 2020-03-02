"use strict";
// util.ts
/**
 * Utility functions
 *
 * authors: Michael K.
 * @packageDocumentation
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Util;
(function (Util) {
    /**
     * Stateless object mutation. Returns new object with updated properties
     * @param original Original object
     * @param updates Object containing keys with corresponding values to update
     */
    function update(original, updates) {
        var output = __assign({}, original);
        Object.keys(updates).forEach(function (key) {
            output[key] = updates[key];
        });
        return output;
    }
    Util.update = update;
})(Util || (Util = {}));
exports["default"] = Util;
