"use strict";
/**
 * Created by user on 2020/6/20.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPackageJsonScripts = exports.sortPackageJsonScriptsOld = exports._core = void 0;
const tslib_1 = require("tslib");
const handleOptions_1 = tslib_1.__importDefault(require("./handleOptions"));
const handleKeyOrdersCore_1 = require("./handleKeyOrdersCore");
const sort_object_keys2_1 = tslib_1.__importDefault(require("sort-object-keys2"));
const util_1 = require("./util");
/**
 * a better sort package.json scripts, by default is follow npm lifecycle scripts
 *
 * origin code fork from https://github.com/keithamus/sort-package-json
 */
function _core(scripts, opts) {
    const keys = (0, handleKeyOrdersCore_1.handleKeyOrdersCore)(Object.keys(scripts), opts);
    return (0, sort_object_keys2_1.default)(scripts, {
        keys,
        sort: opts.sortKeyFn,
    });
}
exports._core = _core;
function sortPackageJsonScriptsOld(scripts, opts) {
    opts = (0, handleOptions_1.default)(opts);
    return _core(scripts, opts);
}
exports.sortPackageJsonScriptsOld = sortPackageJsonScriptsOld;
function sortPackageJsonScripts(scripts, opts) {
    opts = (0, handleOptions_1.default)(opts);
    const { omitKeyFn, sortKeyFn } = opts;
    scripts = _core(scripts, opts);
    let topMap = Object.keys(scripts)
        .reduce((topMap, full) => {
        var _a;
        let { key, omitted } = omitKeyFn(full);
        topMap[key] = (_a = topMap[key]) !== null && _a !== void 0 ? _a : {};
        if (full !== key) {
            let i = full.indexOf(key);
            let sub = full.slice(i + key.length);
            let pre = full.slice(0, i);
            let subkey = (0, util_1.trimKey)(sub);
            topMap[key][subkey] = topMap[key][subkey] || {};
            topMap[key][subkey][pre] = topMap[key][subkey][pre] || {};
            topMap[key][subkey][pre][sub] = full;
        }
        return topMap;
    }, {});
    let keys = Object.entries(topMap)
        .reduce((a, [key, c]) => {
        a.push(key);
        if (Object.keys(c).length) {
            c = (0, sort_object_keys2_1.default)(c, {
                keys: (0, handleKeyOrdersCore_1.handleKeyOrdersCore)(Object.keys(c), opts),
                sort: sortKeyFn,
            });
            Object.keys(c).forEach(subkey => {
                c[subkey] = (0, sort_object_keys2_1.default)(c[subkey], {
                    keys: (0, handleKeyOrdersCore_1.handleKeyOrdersCore)(Object.keys(c[subkey]), opts),
                    sort: sortKeyFn,
                });
                Object.keys(c[subkey]).forEach(pre => {
                    c[subkey][pre] = (0, sort_object_keys2_1.default)(c[subkey][pre], {
                        keys: (0, handleKeyOrdersCore_1.handleKeyOrdersCore)(Object.keys(c[subkey][pre]), opts),
                        sort: sortKeyFn,
                    });
                    Object.keys(c[subkey][pre]).forEach(sub => {
                        a.push(c[subkey][pre][sub]);
                    });
                });
            });
        }
        return a;
    }, []);
    //keys = array_unique(keys)
    return (0, sort_object_keys2_1.default)(scripts, {
        keys,
        sort: opts.sortKeyFn,
    });
}
exports.sortPackageJsonScripts = sortPackageJsonScripts;
exports.default = sortPackageJsonScripts;
//# sourceMappingURL=sortScripts.js.map