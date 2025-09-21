import type { IExpect } from "../types";
import { assert } from "../utils/assert";
import { toJSONStr } from "../utils/to-json";

export function expect<T>(value: T): IExpect<T> {
    return {
        toBe(v: T) {
            if (toJSONStr(v) !== toJSONStr(value)) {
                throw `❌ Expected ${v}, but got ${value}`;
            }
            console.log("✅ toBe passed");
        },

        toEqual(v: T) {
            if (toJSONStr(v) !== toJSONStr(value)) {
                throw `❌ Expected ${toJSONStr(v)} to be same as ${toJSONStr(
                    v
                )}, but got ${toJSONStr(value)}`;
            }
            console.log("✅ Values matched");
        },

        toBeTruthy() {
            if (!value) {
                throw `❌ Expected ${value} to be truthy, but got falsy value.`;
            }

            console.log("✅ Values matched");
        },

        toBeFalsy() {
            if (value) {
                throw `❌ Expected ${value} to be falsy, but got truthy value.`;
            }

            console.log("✅ Values matched");
        },

        toThrow(message) {
            assert(!value, message ?? "Error");

            console.log("✅ Values matched");
        },
    };
}
