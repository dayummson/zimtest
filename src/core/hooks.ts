export type HookFn = () => void | Promise<void>;

// Internal state for hooks
let beforeAllFn: HookFn | null = null;
let afterAllFn: HookFn | null = null;
let beforeEachFn: HookFn | null = null;
let afterEachFn: HookFn | null = null;

// Register hook functions
export function beforeAll(fn: HookFn) {
    beforeAllFn = fn;
}
export function afterAll(fn: HookFn) {
    afterAllFn = fn;
}
export function beforeEach(fn: HookFn) {
    beforeEachFn = fn;
}
export function afterEach(fn: HookFn) {
    afterEachFn = fn;
}

// Helpers so the runner can *use* these
export function getBeforeAll() {
    return beforeAllFn;
}
export function getAfterAll() {
    return afterAllFn;
}
export function getBeforeEach() {
    return beforeEachFn;
}
export function getAfterEach() {
    return afterEachFn;
}
