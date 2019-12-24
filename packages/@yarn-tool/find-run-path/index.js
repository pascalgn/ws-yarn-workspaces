"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
function processRunPath(options = {}) {
    let { binPaths, execPath, envPath, pathKey, delimiter, processEnv } = lib_1.processRunPathCore(options);
    let result = [];
    if (options.includeEnvPath) {
        result.push(envPath);
    }
    let binPathString = binPaths.join(delimiter);
    if (options.prepend) {
        result.unshift(binPathString);
    }
    else {
        result.push(binPathString);
    }
    if (options.appendExecPath) {
        result.push(execPath);
    }
    return {
        result: result.join(delimiter),
        processEnv,
        pathKey,
        delimiter,
    };
}
exports.processRunPath = processRunPath;
function processRunPathEnv(options = {}) {
    let { processEnv, pathKey, result } = processRunPath({
        ...options,
        includeEnvPath: true,
    });
    if (!options.overwrite) {
        processEnv = {
            ...processEnv,
        };
    }
    processEnv[pathKey] = result;
    return processEnv;
}
exports.processRunPathEnv = processRunPathEnv;
exports.default = processRunPathEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEyQztBQThCM0MsU0FBZ0IsY0FBYyxDQUFpQixVQUFpQyxFQUFFO0lBRWpGLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLHdCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWxHLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUUxQixJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQzFCO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQjtJQUVELElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFN0MsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUNuQjtRQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDOUI7U0FFRDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDM0I7SUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQzFCO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0QjtJQUVELE9BQU87UUFDTixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsVUFBVTtRQUNWLE9BQU87UUFDUCxTQUFTO0tBQ1QsQ0FBQztBQUNILENBQUM7QUFqQ0Qsd0NBaUNDO0FBT0QsU0FBZ0IsaUJBQWlCLENBQWlCLFVBQW9DLEVBQUU7SUFFdkYsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ3BELEdBQUcsT0FBTztRQUNWLGNBQWMsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUN0QjtRQUNDLFVBQVUsR0FBRztZQUNaLEdBQUcsVUFBVTtTQUNiLENBQUE7S0FDRDtJQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7SUFFN0IsT0FBTyxVQUFpQixDQUFDO0FBQzFCLENBQUM7QUFqQkQsOENBaUJDO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9jZXNzUnVuUGF0aENvcmUgfSBmcm9tICcuL2xpYic7XG5cbnR5cGUgUHJvY2Vzc0VudkNvcmU8UD4gPSBQICYge1xuXHRQYXRoOiBzdHJpbmcsXG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZXNzRW52ID0gUHJvY2Vzc0VudkNvcmU8dHlwZW9mIHByb2Nlc3MuZW52PjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc0ZpbmRCaW5QYXRoXG57XG5cdGN3ZD86IHN0cmluZyxcblx0c3RvcFBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc0dldFJ1blBhdGhDb3JlPFAgPSBQcm9jZXNzRW52PiBleHRlbmRzIElPcHRpb25zRmluZEJpblBhdGhcbntcblx0ZW52UGF0aD86IHN0cmluZyxcblx0ZXhlY1BhdGg/OiBzdHJpbmcsXG5cdHByb2Nlc3NFbnY/OiBQIHwgUHJvY2Vzc0Vudixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc0dldFJ1blBhdGg8UCA9IFByb2Nlc3NFbnY+IGV4dGVuZHMgSU9wdGlvbnNHZXRSdW5QYXRoQ29yZTxQPlxue1xuXHRwcmVwZW5kPzogYm9vbGVhbjtcblxuXHRhcHBlbmRFeGVjUGF0aD86IGJvb2xlYW4sXG5cblx0aW5jbHVkZUVudlBhdGg/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1J1blBhdGg8UCA9IFByb2Nlc3NFbnY+KG9wdGlvbnM6IElPcHRpb25zR2V0UnVuUGF0aDxQPiA9IHt9KVxue1xuXHRsZXQgeyBiaW5QYXRocywgZXhlY1BhdGgsIGVudlBhdGgsIHBhdGhLZXksIGRlbGltaXRlciwgcHJvY2Vzc0VudiB9ID0gcHJvY2Vzc1J1blBhdGhDb3JlKG9wdGlvbnMpO1xuXG5cdGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cblx0aWYgKG9wdGlvbnMuaW5jbHVkZUVudlBhdGgpXG5cdHtcblx0XHRyZXN1bHQucHVzaChlbnZQYXRoKTtcblx0fVxuXG5cdGxldCBiaW5QYXRoU3RyaW5nID0gYmluUGF0aHMuam9pbihkZWxpbWl0ZXIpO1xuXG5cdGlmIChvcHRpb25zLnByZXBlbmQpXG5cdHtcblx0XHRyZXN1bHQudW5zaGlmdChiaW5QYXRoU3RyaW5nKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXN1bHQucHVzaChiaW5QYXRoU3RyaW5nKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmFwcGVuZEV4ZWNQYXRoKVxuXHR7XG5cdFx0cmVzdWx0LnB1c2goZXhlY1BhdGgpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRyZXN1bHQ6IHJlc3VsdC5qb2luKGRlbGltaXRlciksXG5cdFx0cHJvY2Vzc0Vudixcblx0XHRwYXRoS2V5LFxuXHRcdGRlbGltaXRlcixcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc0dldFJ1blBhdGhFbnY8UCA9IFByb2Nlc3NFbnY+IGV4dGVuZHMgSU9wdGlvbnNHZXRSdW5QYXRoPFA+XG57XG5cdG92ZXJ3cml0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUnVuUGF0aEVudjxQID0gUHJvY2Vzc0Vudj4ob3B0aW9uczogSU9wdGlvbnNHZXRSdW5QYXRoRW52PFA+ID0ge30pOiBQcm9jZXNzRW52Q29yZTxQPlxue1xuXHRsZXQgeyBwcm9jZXNzRW52LCBwYXRoS2V5LCByZXN1bHQgfSA9IHByb2Nlc3NSdW5QYXRoKHtcblx0XHQuLi5vcHRpb25zLFxuXHRcdGluY2x1ZGVFbnZQYXRoOiB0cnVlLFxuXHR9KTtcblxuXHRpZiAoIW9wdGlvbnMub3ZlcndyaXRlKVxuXHR7XG5cdFx0cHJvY2Vzc0VudiA9IHtcblx0XHRcdC4uLnByb2Nlc3NFbnYsXG5cdFx0fVxuXHR9XG5cblx0cHJvY2Vzc0VudltwYXRoS2V5XSA9IHJlc3VsdDtcblxuXHRyZXR1cm4gcHJvY2Vzc0VudiBhcyBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NSdW5QYXRoRW52XG4iXX0=