// is-a relationship
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// can-do relationship
interface Pet {
  getName(): string;
  makeSound(): void;
}

// Dog is an animal
class Dog extends Animal implements Pet {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  getName(): string {
    return this.name;
  }

  makeSound(): void {
    console.log(`Woof! I'm a ${this.breed} and my name is ${this.name}.`);
  }
}

// Cat is an animal
class Cat extends Animal implements Pet {
  whiskers: number;

  constructor(name: string, whiskers: number) {
    super(name);
    this.whiskers = whiskers;
  }

  getName(): string {
    return this.name;
  }

  makeSound(): void {
    console.log(
      `Meow! I have ${this.whiskers} whiskers and my name is ${this.name}.`
    );
  }
}

const Sarah: Dog = new Dog("Sarah", "Golden Retriever");
const Tom: Cat = new Cat("Tom", 4);

console.log(Sarah.getName());
console.log(Tom.getName());
Sarah.makeSound();
Tom.makeSound();
