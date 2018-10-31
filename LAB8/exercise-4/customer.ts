

export class Customer {
    firstName: string;
    lastName: string;
    age: Number;

    constructor(firstName: string, lastName: string, age: Number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public GetAge() {
        console.log(`Age is: ${this.age}`);
    }
}

