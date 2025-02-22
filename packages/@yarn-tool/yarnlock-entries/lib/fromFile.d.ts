/// <reference types="node" />
import type { IYarnLockParsedV1, IYarnLockParsedV2 } from '@yarn-tool/yarnlock-parse';
import { PathLike } from "fs";
export declare function fromFile<T extends IYarnLockParsedV1 | IYarnLockParsedV2>(yarnlock_file: PathLike): import("./YarnLockIterator").YarnLockIterator<T, import("@yarn-tool/yarnlock-parse").IUnpackYarnLockDataRow<T>>;
export declare function fromFileAsync<T extends IYarnLockParsedV1 | IYarnLockParsedV2>(yarnlock_file: PathLike): Promise<import("./YarnLockIterator").YarnLockIterator<T, import("@yarn-tool/yarnlock-parse").IUnpackYarnLockDataRow<T>>>;
