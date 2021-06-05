import { yarn, npm } from 'global-dirs';

const defaultMap: Record<string, string> = {
	tsdx: 'tsdx/dist/index',
}

export const SymbolCurrentDirectory = Symbol.for('cwd');
export const SymbolGlobal = Symbol.for('global');
export const SymbolGlobalNpm = Symbol.for('npm');
export const SymbolGlobalYarn = Symbol.for('yarn');
export const SymbolModuleMain = Symbol.for('module.main');

type IPathItem =
	typeof SymbolCurrentDirectory
	| typeof SymbolGlobal
	| typeof SymbolGlobalNpm
	| typeof SymbolGlobalYarn
	| typeof SymbolModuleMain;

export interface IOptionsCore
{
	paths?: (string | IPathItem)[];
}

export interface IOptions extends IOptionsCore
{
	map?: Record<string, string>;
	require?: NodeRequire;
	includeGlobal?: boolean | IPathItem[];
	includeCurrentDirectory?: boolean;
	cwd?: string;
}

export function requireResolveCore(name: string, options?: IOptions)
{
	options ??= {};

	const target: string = options.map?.[name] ?? defaultMap[name] ?? name;

	let paths: IOptionsCore["paths"] = options.paths;

	if (options.includeGlobal)
	{
		paths = paths ?? [];

		if (Array.isArray(options.includeGlobal))
		{
			(options.includeGlobal)
				.forEach(value =>
				{
					switch (value)
					{
						case SymbolGlobalYarn:
						case SymbolGlobalNpm:
						case SymbolCurrentDirectory:
						case SymbolGlobal:
						case SymbolModuleMain:
							_unshiftArray(paths, value);
							break;
					}
				})
		}
		else
		{
			_unshiftArray(paths, SymbolGlobal)
		}
	}

	if (options.includeCurrentDirectory)
	{
		_unshiftArray(paths, SymbolCurrentDirectory)
	}

	return (options.require ?? require).resolve(target, {
		...options,
		paths: handleOptionsPaths(paths, options.cwd),
	})
}

export type IErrorModuleNotFound<E> = E & {
	code: string | 'MODULE_NOT_FOUND';
	requireStack: string[];
};

export function handleOptionsPaths(paths: IOptionsCore["paths"], cwd?: string): string[]
{
	if (paths?.length)
	{
		paths = paths.reduce((paths, value) =>
		{
			switch (value)
			{
				case SymbolGlobal:
					paths.push(yarn.packages)
					paths.push(npm.packages)
					break;
				case SymbolCurrentDirectory:
					paths.push(cwd ?? process.cwd())
					break;
				case SymbolGlobalNpm:
					paths.push(npm.packages)
					break;
				case SymbolGlobalYarn:
					paths.push(yarn.packages)
					break;
				case SymbolModuleMain:
					if (typeof module !== 'undefined' && require.main !== module)
					{
						paths.push(require.main.path)
					}
					break;
				default:
					if (value ?? false)
					{
						paths.push(value)
					}
			}

			return paths
		}, [] as string[]);
	}

	if (!paths?.length)
	{
		paths = void 0
	}

	return paths as string[]
}

export function isErrorModuleNotFound<T extends Error>(error: T): error is IErrorModuleNotFound<T>
{
	return (error as IErrorModuleNotFound<T>).code === 'MODULE_NOT_FOUND'
}

export function requireExtra<T extends any>(name: string, options?: IOptions): T
{
	return require(requireResolveCore(name, options))
}

export function importExtra<T extends any>(name: string, options?: IOptions): Promise<T>
{
	return import(requireResolveCore(name, options))
}

export function requireResolveExtra(name: string, options?: IOptions)
{
	let error: IErrorModuleNotFound<Error>;
	let result: string;

	try
	{
		result = requireResolveCore(name, options)

		return {
			result,
			error,
		}
	}
	catch (e)
	{
		error = e;

		if (isErrorModuleNotFound(error))
		{
			return {
				result,
				error,
			}
		}

		throw error;
	}
}

export function _unshiftArray<T extends any>(array: T[], item: T)
{
	(array[0] !== item) && array.unshift(item);

	return array;
}

export default requireResolveExtra
