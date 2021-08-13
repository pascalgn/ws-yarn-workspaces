"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkToNodeModules = exports.linkToNodeModulesCore = void 0;
const upath2_1 = require("upath2");
const find_root_1 = require("@yarn-tool/find-root");
const core_1 = require("find-yarn-workspace-root2/core");
const fs_symlink_extra_1 = require("fs-symlink-extra");
function linkToNodeModulesCore(options) {
    var _a;
    let resultPath = (0, upath2_1.join)(options.targetNodeModulesPath, options.name);
    (0, fs_symlink_extra_1.fsSymlinkSync)(options.sourcePackagePath, resultPath, {
        overwrite: (_a = options.overwrite) !== null && _a !== void 0 ? _a : true,
    });
    return {
        ...options,
        resultPath,
    };
}
exports.linkToNodeModulesCore = linkToNodeModulesCore;
function linkToNodeModules(options) {
    var _a, _b, _c, _d, _e;
    options !== null && options !== void 0 ? options : (options = {});
    (_a = options.cwd) !== null && _a !== void 0 ? _a : (options.cwd = process.cwd());
    if (!options.sourcePackagePath || !options.targetNodeModulesPath) {
        let rootData = (0, find_root_1.findRoot)(options);
        (_b = options.sourcePackagePath) !== null && _b !== void 0 ? _b : (options.sourcePackagePath = rootData.pkg);
        (_c = options.targetNodeModulesPath) !== null && _c !== void 0 ? _c : (options.targetNodeModulesPath = (0, upath2_1.join)(rootData.root, (_d = options.targetNodeModulesName) !== null && _d !== void 0 ? _d : 'node_modules'));
    }
    (_e = options.name) !== null && _e !== void 0 ? _e : (options.name = (0, core_1.readPackageJSON)(options.sourcePackagePath).name);
    return linkToNodeModulesCore(options);
}
exports.linkToNodeModules = linkToNodeModules;
exports.default = linkToNodeModules;
//# sourceMappingURL=index.js.map