interface Person {
  name: string;
}

function parseInput(str: string): string;
function parseInput(num: number): number;
function parseInput(age: number, person: Person): string;
function parseInput(input: number | string, person?: Person): string | number {
  if (typeof input === "string") {
    return input;
  } else if (typeof input === "number" && person) {
    return `I am ${person.name} and I am ${input} years old.`;
  } else {
    return input;
  }
}

const John: Person = {
  name: "John",
};

console.log(parseInput("Helloo."));
console.log(parseInput(10));
console.log(parseInput(20, John));
