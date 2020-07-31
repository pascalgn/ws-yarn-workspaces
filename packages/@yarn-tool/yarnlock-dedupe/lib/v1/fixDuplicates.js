"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixDuplicates = void 0;
const yarn_deduplicate_1 = require("yarn-deduplicate");
function fixDuplicates(yarnlock_old, options) {
    yarnlock_old = yarnlock_old.toString();
    //let { banner, content } = hasBanner(yarnlock_old)
    let output = yarn_deduplicate_1.fixDuplicates(yarnlock_old, options);
    return `${output}`;
}
exports.fixDuplicates = fixDuplicates;
//# sourceMappingURL=fixDuplicates.js.map