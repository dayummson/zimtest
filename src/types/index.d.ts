type TestFn = () => void | Promise<void>;
interface IExpect<T = any> {
    toBe: (v: T) => void;
    toEqual: (v: T) => void;
    toBeTruthy: () => void;
    toBeFalsy: () => void;
    toThrow: (v?: string) => void;
    // adding more later (toThrow, toBeGreaterThan, etc.)
}

// exports
export type { IExpect, TestFn };
