// @ts-ignore
import { type } from "@jslib-book/type";
function hasOwnProp(obj:Object, key:string) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export function pick(obj:Object, paths:string | []) {
    if (type(obj) !== "Object") {
        return {};
    }

    if (!Array.isArray(paths)) {
        return {};
    }
    const res = {};

    for (let i = 0; i < paths.length; i++) {
        const key = paths[i];
        if (hasOwnProp(obj, key)) {
            res[key] = obj[key];
        }
    }
    return res;
}
