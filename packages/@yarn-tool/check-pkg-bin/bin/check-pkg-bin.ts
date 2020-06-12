#!/usr/bin/env node

import yargs from 'yargs';
import { checkWorkspaces, checkPkgJson, checkPkgDir } from '..';
import { console, chalkByConsoleMaybe } from 'debug-color2';
import Table from 'cli-table3';
import pkgDir from 'pkg-dir';
import stringNaturalCompare from '@bluelovers/string-natural-compare';

const cli = yargs
	.option('workspaces', {
		alias: ['w'],
		boolean: true,
	})
	.option('cwd', {
		normalize: true,
		default: process.cwd(),
	})
	.help()
	.argv
;

const table = new Table({
	colAligns: ['left', 'right'],
	chars: {
		top: '',
		'top-mid': '',
		'top-left': '',
		'top-right': '',
		bottom: '',
		'bottom-mid': '',
		'bottom-left': '',
		'bottom-right': '',
		left: '',
		'left-mid': '',
		mid: '',
		'mid-mid': '',
		right: '',
		'right-mid': '',
		middle: '',
	},
});

const chalk = chalkByConsoleMaybe(console);

table.options.head = [
	chalk.bold.reset('package name'),
	chalk.bold.reset('validate'),
];

let bool: boolean;

if (cli.workspaces)
{
	checkWorkspaces(cli.cwd)
		.sort((a, b) => stringNaturalCompare(a.name, b.name))
		.forEach(data =>
		{
			let valid = data.valid.toString()
			let color = 'gray';

			if (data.result.length)
			{
				bool = data.valid && (bool ?? true)

				color = data.valid ? 'green' : 'red';
			}
			else
			{
				valid = 'none'
			}

			table.push([
				data.name,
				chalk[color](valid),
			]);
		})
	;
}
else
{
	let data = checkPkgDir(pkgDir.sync(cli.cwd))
	bool = (!data.result.length || data.valid);
	let valid = data.valid.toString()
	let color = 'gray';

	if (!data.result.length)
	{
		valid = 'none'
	}
	else
	{
		color = data.valid ? 'green' : 'red';
	}

	table.push([
		chalk.blue(data.name),
		chalk[color](valid),
	]);
}

console.log(table.toString())

if (bool === false)
{
	process.exit(1)
}
