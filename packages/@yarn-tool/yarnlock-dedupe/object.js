"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarnDedupe = exports.fixDuplicates = exports.listDuplicates = void 0;
const index_1 = require("./index");
const index_2 = __importDefault(require("@yarn-tool/yarnlock-stringify/index"));
/**
 * @deprecated
 */
function listDuplicates(yarnlock_old, options) {
    return index_1.listDuplicates(index_2.default(yarnlock_old), options);
}
exports.listDuplicates = listDuplicates;
/**
 * @deprecated
 */
function fixDuplicates(yarnlock_old, options) {
    return index_1.fixDuplicates(index_2.default(yarnlock_old), options);
}
exports.fixDuplicates = fixDuplicates;
/**
 * @deprecated
 */
function yarnDedupe(yarnlock_old, options) {
    return index_1.yarnDedupe(index_2.default(yarnlock_old), options);
}
exports.yarnDedupe = yarnDedupe;
/**
 * @deprecated
 */
const auto = {
    listDuplicates,
    fixDuplicates,
    yarnDedupe,
};
/**
 * @deprecated
 */
exports.default = auto;
//# sourceMappingURL=object.js.map