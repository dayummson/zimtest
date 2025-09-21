import { describe, it } from "../src/core/runner";
import { expect } from "../src/core/expect";

function reshape(array: number[], cols: number, rows: number): number[][] {
    let result: number[][] = [];

    for (let r = 0; r < rows; r++) {
        const start = r * cols;
        const end = start + cols;
        result.push(array.slice(start, end));
    }

    return result;
}

describe("numpy operation", () => {
    it("should reshape array with cols and rows", () => {
        const r = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        expect(reshape([1, 2, 3, 4, 5, 6], 3, 2)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
        ]);
    });

    it("should handle single item array when reshaping", () => {
        const r = [1];
        expect(reshape([1, 2], 1, 1)).toEqual([[1]]);
    });

    it("should handle duplicates", () => {
        expect(reshape([1, 1], 2, 1)).toBe([[1, 1]]);
    });
});
