import { simplifyRange } from './lib/simplifyRange';
import { handleAmpersandAndSpaces } from './lib/handleAmpersandAndSpaces';
import { satisfies } from './lib/satisfies';
import { maxSatisfying } from './lib/maxSatisfying';
import { minSatisfying } from './lib/minSatisfying';
import { validRange } from './lib/validRange';
import { Range } from './lib/Range';
export type { IOptions } from './lib/types';
export { reAmpersandAndSpaces } from './lib/const';
export { satisfies, maxSatisfying, minSatisfying, validRange, simplifyRange, handleAmpersandAndSpaces, Range, };
declare const _default: {
    satisfies: typeof satisfies;
    maxSatisfying: typeof maxSatisfying;
    minSatisfying: typeof minSatisfying;
    validRange: typeof validRange;
    simplifyRange: typeof simplifyRange;
    handleAmpersandAndSpaces: typeof handleAmpersandAndSpaces;
    Range: typeof Range;
};
export default _default;
