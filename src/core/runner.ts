import { TestFn } from "../types";
import { getAfterEach, getBeforeEach } from "./hooks";

type Test = { title: string; fn: TestFn };

export async function it(title: string, fn: TestFn) {
    currentTests.push({ title, fn });
}

let currentTests: Test[] = [];

export async function describe(title: string, fn: () => void | Promise<void>) {
    console.log(`\n${title}`);
    console.log("|");

    // reset collected tests for this suite
    currentTests = [];

    // register tests
    await fn();

    // now actually run them
    for (const { title, fn } of currentTests) {
        try {
            await getBeforeEach()?.();
            await fn();
            console.log(`   ✅ ${title}`);
        } catch (error) {
            console.error(`   ❌ ${title} ->`, error);
        } finally {
            await getAfterEach()?.();
        }
    }
}
