"use strict";
/**
 * Created by user on 2020/6/15.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/lerna"), exports);
__exportStar(require("./lib/yargs-setting"), exports);
const lerna_1 = require("./lib/lerna");
exports.default = lerna_1.updateChangelogByCwd;
//# sourceMappingURL=index.js.map