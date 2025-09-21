import { describe, it } from "../src/core/runner";
import { expect } from "../src/core/expect";

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
    const iteration = c.iteration ?? DEFAULT_ITERATION;

    let value: number;
    if (typeof c.value === "number") {
        value = c.value;
    } else {
        value = DEFAULT_VALUE;
    }

    return { iteration, value };
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
