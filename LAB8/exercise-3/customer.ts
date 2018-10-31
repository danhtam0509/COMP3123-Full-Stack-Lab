
class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// object = instance of class
let customer = new Customer("John", "Smith");
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();