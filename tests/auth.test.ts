import { describe, it } from "../src/core/runner";
import { expect } from "../src/core/expect";

function mockEmailAuth(e: boolean = false) {
    if (e) return "test@gmail.com";

    return "test@gmail.com";
}

function emailAuthFail() {
    throw "Error occured";
}

describe("Authentication flow operation", () => {
    it("should handle email auth and return email upon calling", () => {
        expect(mockEmailAuth()).toEqual("test@gmail.com");
    });

    it("should handle email auth and return email even on error", () => {
        expect(mockEmailAuth(true)).toBe("test@gmail.com");
    });

    it("should handle upon error", () => {
        expect(emailAuthFail()).toThrow();
    });
});
