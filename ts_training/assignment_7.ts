const logging = () => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    const targetMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      console.log(`Calling ${memberName} with arguments: ${args}`);
      return targetMethod.apply(this, args);
    };
    return propertyDescriptor;
  };
};

class Student {
  name: string;
  midterms: number;
  finals: number;

  constructor(name: string) {
    this.name = name;
  }

  @logging()
  setMidtermsScore(score: number) {
    this.midterms = score;
  }

  @logging()
  setFinalsScore(score: number) {
    this.finals = score;
  }
}

const bob: Student = new Student("Bob");
bob.setFinalsScore(22);
bob.setMidtermsScore(12);
console.log(bob.midterms); // check if it was updated
console.log(bob.finals);
