export function assert(condition: boolean, message: string): void {
    if (!condition) throw message;
}

export function assertNever(x: never) {
    if (x) throw new Error("X never supposed to have a value.");
}
