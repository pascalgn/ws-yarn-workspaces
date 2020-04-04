"use strict";
/**
 * Created by user on 2018/5/14/014.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const find_pkg_ws_1 = require("find-pkg-ws");
exports.findPkg = find_pkg_ws_1.default;
const fs = require("fs-extra");
const path = require("path");
function getConfig(cwd) {
    let file = find_pkg_ws_1.default(cwd);
    if (!file) {
        throw new RangeError();
    }
    let pkg = fs.readJSONSync(file);
    return parseWorkspaces(pkg.workspaces);
}
exports.getConfig = getConfig;
function parseWorkspaces(workspaces) {
    let ws = Array.isArray(workspaces) ? {
        packages: workspaces,
    } : workspaces;
    return ws;
}
exports.parseWorkspaces = parseWorkspaces;
function parseStaticPackagesPaths(workspaces) {
    workspaces = parseWorkspaces(workspaces);
    return (workspaces.packages || [])
        .reduce(function (a, row) {
        let b = [];
        let ls = row.split(/[\\\/]/);
        ls
            .every(function (v) {
            let bool = /^\w+$/.test(v);
            if (bool) {
                b.push(v);
            }
            return bool;
        });
        if (b.length) {
            if (b.length != ls.length) {
                a.prefix.push(path.join(...b));
            }
            else {
                a.static.push(path.join(...b));
            }
        }
        a.all.push(row);
        return a;
    }, {
        static: [],
        prefix: [],
        all: [],
    });
}
exports.parseStaticPackagesPaths = parseStaticPackagesPaths;
exports.default = getConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsNkNBQWtDO0FBbUZ6QixrQkFuRkYscUJBQU8sQ0FtRkU7QUFsRmhCLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFTN0IsU0FBZ0IsU0FBUyxDQUFDLEdBQVk7SUFFckMsSUFBSSxJQUFJLEdBQUcscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUMsSUFBSSxFQUNUO1FBQ0MsTUFBTSxJQUFJLFVBQVUsRUFBRSxDQUFDO0tBQ3ZCO0lBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQyxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQVpELDhCQVlDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLFVBQW9EO0lBRW5GLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsRUFBRSxVQUFVO0tBQ3BCLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUVkLE9BQU8sRUFBc0IsQ0FBQztBQUMvQixDQUFDO0FBUEQsMENBT0M7QUFFRCxTQUFnQix3QkFBd0IsQ0FBQyxVQUFvRDtJQUU1RixVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztTQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRztRQUV2QixJQUFJLENBQUMsR0FBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3QixFQUFFO2FBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUVqQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNCLElBQUksSUFBSSxFQUNSO2dCQUNDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQ0Y7UUFFRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQ1o7WUFDQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sRUFDekI7Z0JBQ0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBRUQ7Z0JBQ0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7U0FDRDtRQUVELENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQWM7UUFDdEIsTUFBTSxFQUFFLEVBQWM7UUFFdEIsR0FBRyxFQUFFLEVBQWM7S0FDbkIsQ0FBQyxDQUNGO0FBQ0YsQ0FBQztBQS9DRCw0REErQ0M7QUFJRCxrQkFBZSxTQUFTLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzUvMTQvMDE0LlxuICovXG5cbmltcG9ydCBmaW5kUGtnIGZyb20gJ2ZpbmQtcGtnLXdzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCB0eXBlIFdvcmtzcGFjZXNDb25maWcgPSB7XG5cdHBhY2thZ2VzPzogV29ya3NwYWNlc0NvbmZpZ0FycmF5LFxuXHRub2hvaXN0PzogQXJyYXk8c3RyaW5nPixcbn07XG5cbmV4cG9ydCB0eXBlIFdvcmtzcGFjZXNDb25maWdBcnJheSA9IEFycmF5PHN0cmluZz47XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoY3dkPzogc3RyaW5nKVxue1xuXHRsZXQgZmlsZSA9IGZpbmRQa2coY3dkKTtcblxuXHRpZiAoIWZpbGUpXG5cdHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcigpO1xuXHR9XG5cblx0bGV0IHBrZyA9IGZzLnJlYWRKU09OU3luYyhmaWxlKTtcblxuXHRyZXR1cm4gcGFyc2VXb3Jrc3BhY2VzKHBrZy53b3Jrc3BhY2VzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV29ya3NwYWNlcyh3b3Jrc3BhY2VzOiBXb3Jrc3BhY2VzQ29uZmlnIHwgV29ya3NwYWNlc0NvbmZpZ0FycmF5KVxue1xuXHRsZXQgd3MgPSBBcnJheS5pc0FycmF5KHdvcmtzcGFjZXMpID8ge1xuXHRcdHBhY2thZ2VzOiB3b3Jrc3BhY2VzLFxuXHR9OiB3b3Jrc3BhY2VzO1xuXG5cdHJldHVybiB3cyBhcyBXb3Jrc3BhY2VzQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0aWNQYWNrYWdlc1BhdGhzKHdvcmtzcGFjZXM6IFdvcmtzcGFjZXNDb25maWcgfCBXb3Jrc3BhY2VzQ29uZmlnQXJyYXkpXG57XG5cdHdvcmtzcGFjZXMgPSBwYXJzZVdvcmtzcGFjZXMod29ya3NwYWNlcyk7XG5cblx0cmV0dXJuICh3b3Jrc3BhY2VzLnBhY2thZ2VzIHx8IFtdKVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIHJvdylcblx0XHR7XG5cdFx0XHRsZXQgYjogc3RyaW5nW10gPSBbXTtcblxuXHRcdFx0bGV0IGxzID0gcm93LnNwbGl0KC9bXFxcXFxcL10vKTtcblxuXHRcdFx0bHNcblx0XHRcdFx0LmV2ZXJ5KGZ1bmN0aW9uICh2KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IGJvb2wgPSAvXlxcdyskLy50ZXN0KHYpO1xuXG5cdFx0XHRcdFx0aWYgKGJvb2wpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Yi5wdXNoKHYpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBib29sO1xuXHRcdFx0XHR9KVxuXHRcdFx0O1xuXG5cdFx0XHRpZiAoYi5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChiLmxlbmd0aCAhPSBscy5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhLnByZWZpeC5wdXNoKHBhdGguam9pbiguLi5iKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YS5zdGF0aWMucHVzaChwYXRoLmpvaW4oLi4uYikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGEuYWxsLnB1c2gocm93KTtcblxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSwge1xuXHRcdFx0c3RhdGljOiBbXSBhcyBzdHJpbmdbXSxcblx0XHRcdHByZWZpeDogW10gYXMgc3RyaW5nW10sXG5cblx0XHRcdGFsbDogW10gYXMgc3RyaW5nW10sXG5cdFx0fSlcblx0O1xufVxuXG5leHBvcnQgeyBmaW5kUGtnIH1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29uZmlnXG5cblxuIl19