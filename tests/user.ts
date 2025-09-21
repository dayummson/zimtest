const ITERATIONS = 20;

class User {
    readonly id: string;
    readonly email: string;

    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}

console.log(crypto.randomUUID());

const users: User[] = [];

for (let i = 0; i < ITERATIONS; i++) {
    users.push(
        new User(
            crypto.randomUUID(),
            `test${i}${crypto.randomUUID().slice(0, 2)}@gmail.com`
        )
    );
}

for (const user of users) {
    console.log("User id: ", user.id);
    console.log("User email: ", user.email);
}

interface Converter<T = any> {
    fromStore: (snapshot: any) => T;
    toStore: (v: any) => T;
}

function doc<T>(value: any) {
    return {
        withConverter: (converter: Converter<User>) => {
            let v: T;
            converter.toStore(value);
            return converter.fromStore(value);
        },
    };
}

const sampleConverter: Converter<User> = {
    fromStore: (s) => s,
    toStore: (s) => s,
};

const t = doc("jhon").withConverter(sampleConverter);
