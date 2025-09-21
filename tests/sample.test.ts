import { describe, it } from "../src/core/runner";
import { afterEach, beforeEach } from "../src/core/hooks";
import { expect } from "../src/core/expect";

describe("array operations", () => {
    let numbers: number[] = [];

    beforeEach(() => {
        numbers = [];
    });

    afterEach(() => {
        console.log("Test finished");
    });

    it("should add items", () => {
        numbers.push(1);
        expect(numbers.length).toBe(1);
    });

    it("should remove items", () => {
        numbers.push(2);
        expect(numbers.length).toBe(1);
        numbers.pop();
        expect(numbers.length).toBe(0);
    });

    it("should return the first item as 0", () => {
        numbers = [1];

        expect(numbers[0]).toEqual(1);
    });

    it("should return the last item as 10", () => {
        numbers = [10];

        expect(numbers[numbers.length - 1]).toEqual(10);
    });

    it("", () => {});
});
