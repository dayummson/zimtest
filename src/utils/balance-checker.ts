export function isObjectEqual(a: any, b: any): boolean {
    let keys = Object.keys(a);

    console.log(keys);
    return false;
}

isObjectEqual({ a: 2 }, { a: 2 });
