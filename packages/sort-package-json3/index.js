"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPackageJson = void 0;
const tslib_1 = require("tslib");
// @ts-ignore
const sort_package_json_1 = require("sort-package-json");
const sort_package_json_scripts_1 = require("sort-package-json-scripts");
const is_plain_obj_1 = tslib_1.__importDefault(require("is-plain-obj"));
const sort_exports_1 = require("./lib/sort-exports");
function sortPackageJson(pkg) {
    pkg = (0, sort_package_json_1.sortPackageJson)(pkg);
    if ((0, is_plain_obj_1.default)(pkg.scripts)) {
        // @ts-ignore
        pkg.scripts = (0, sort_package_json_scripts_1.sortPackageJsonScripts)(pkg.scripts);
    }
    if ((0, is_plain_obj_1.default)(pkg.betterScripts)) {
        // @ts-ignore
        pkg.betterScripts = (0, sort_package_json_scripts_1.sortPackageJsonScripts)(pkg.betterScripts);
    }
    if ((0, is_plain_obj_1.default)(pkg.exports)) {
        // @ts-ignore
        pkg.exports = (0, sort_exports_1.sortPackageJsonExports)(pkg.exports);
    }
    return pkg;
}
exports.sortPackageJson = sortPackageJson;
exports.default = sortPackageJson;
//# sourceMappingURL=index.js.map