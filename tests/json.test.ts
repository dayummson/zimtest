import { describe, it } from "../src/core/runner";
import { expect } from "../src/core/expect";
import { toJSONStr } from "../src/utils/to-json";

function handleSendEmailVerification(e: string): string {
    return e;
}

describe("Json util function operation", () => {
    it("should convert number to string", () => {
        expect(toJSONStr(2)).toBe("2");
    });

    it("should convert null to string", () => {
        expect(toJSONStr(null)).toBe("null");
    });

    it("should convert array to string", () => {
        expect(toJSONStr([1, 2, 4])).toBe("[1,2,4]");
    });

    it("should handle emptry strings", () => {
        expect(toJSONStr("")).toBe('""');
    });

    it("should handle email verification", () => {
        expect(handleSendEmailVerification("test@gmail.com")).toEqual(
            "test@gmail.com"
        );
    });
});
