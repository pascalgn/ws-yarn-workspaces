/// <reference types="node" />
import { IYarnLockParsedV1, IYarnLockParsedV2 } from '@yarn-tool/yarnlock-parse';
export declare function fromContent<T extends IYarnLockParsedV1 | IYarnLockParsedV2>(yarnlock_old: Buffer | string): import("./YarnLockIterator").YarnLockIterator<T, import("@yarn-tool/yarnlock-parse").IUnpackYarnLockDataRow<T>>;
export declare function fromContentAsync<T extends IYarnLockParsedV1 | IYarnLockParsedV2>(yarnlock_old: Buffer | string): Promise<import("./YarnLockIterator").YarnLockIterator<T, import("@yarn-tool/yarnlock-parse").IUnpackYarnLockDataRow<T>>>;
export default fromContent;
