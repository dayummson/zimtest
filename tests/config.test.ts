import { describe, it } from "../src/core/runner";
import { expect } from "../src/core/expect";
import { toJSONStr } from "../src/utils/to-json";

const DEFAULT_ITERATION = 2;
const DEFAULT_VALUE = 2;

interface IConfig {
    iteration?: number;
    value: string | number | null;
}

interface IAbsConfig {
    iteration: number;
    value: number;
}

function getAbsConfig(c: IConfig): IAbsConfig {
    if (!c.iteration) c.iteration = DEFAULT_ITERATION;
    if (!c.value || (c.value && typeof c.value === "string"))
        c.value = DEFAULT_VALUE;

    console.log("before returning: ", toJSONStr(c));
    return c as IAbsConfig;
}

describe("Config operation", () => {
    it("should return abs config value", () => {
        const c: IConfig = {
            value: null,
        };

        const absc: IAbsConfig = {
            value: DEFAULT_VALUE,
            iteration: DEFAULT_ITERATION,
        };

        expect(getAbsConfig(c)).toEqual(absc);
    });
});
