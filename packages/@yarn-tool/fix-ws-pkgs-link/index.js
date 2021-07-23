"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixWorkspacesPackageLinks = void 0;
const listable_1 = require("ws-pkg-list/lib/listable");
const find_root_1 = require("@yarn-tool/find-root");
const util_1 = require("@yarn-tool/node-modules/lib/util");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const path_is_same_1 = require("path-is-same");
const fs_stat_1 = require("fs-stat");
function fixWorkspacesPackageLinks(cwd) {
    const rootData = (0, find_root_1.findRootLazy)({
        cwd,
    });
    const node_modules = (0, util_1.getModulesDir)(rootData.root);
    const listable = (0, listable_1.wsPkgListable)(rootData.root);
    return listable.filter((entry) => {
        let target = (0, path_1.join)(node_modules, entry.name);
        if (!(0, fs_stat_1.isSymbolicLinkSync)(target) && !(0, path_is_same_1.fsSameRealpath)(target, entry.location)) {
            if ((0, fs_extra_1.pathExistsSync)(target)) {
                (0, fs_extra_1.renameSync)(target, target + '.old_' + Math.random());
            }
            (0, fs_extra_1.ensureSymlinkSync)(entry.location, target);
            return true;
        }
    });
}
exports.fixWorkspacesPackageLinks = fixWorkspacesPackageLinks;
exports.default = fixWorkspacesPackageLinks;
//# sourceMappingURL=index.js.map