#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const yargs_setting_1 = tslib_1.__importDefault(require("../lib/yargs-setting"));
const from_list_1 = tslib_1.__importDefault(require("../lib/lerna/from-list"));
const table_1 = require("@yarn-tool/table");
const path_is_same_1 = tslib_1.__importDefault(require("path-is-same"));
const semver_diff_1 = require("@yarn-tool/semver-diff");
const argv = (0, yargs_setting_1.default)(yargs_1.default)
    .option('cwd', {
    default: process.cwd(),
    normalize: true,
})
    .showHelpOnFail(true)
    .version()
    .help()
    .parseSync();
let options = {
    changelogPreset: argv.preset,
    tagPrefix: argv['tag-prefix'],
    type: argv.type || (argv['lerna-package'] ? 'independent' : 'root'),
};
(0, from_list_1.default)(argv.cwd, options)
    .then(data => {
    const table = (0, table_1.createDependencyTable)({
        colAligns: ['left', 'left'],
    });
    table.push([`rootPath`, data.rootPath]);
    if (!(0, path_is_same_1.default)(data.rootPath, data.cwd)) {
        table.push([`targetPath`, data.cwd]);
    }
    table.push([`changelogPreset`, data.options.changelogPreset]);
    table.push([`type`, data.options.type]);
    table.push([`tagPrefix`, data.options.tagPrefix]);
    let version = (0, semver_diff_1.colorizeDiff)(data.pkg.version, data.version);
    table.push([`package`, data.pkg.name]);
    table.push([`version`, version]);
    table.push([`file`, data.logPath]);
    console.log(table.toString().replace(/ +$/g, ''));
});
//# sourceMappingURL=changelog.js.map