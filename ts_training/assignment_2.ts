interface User {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
}

// always put const for objects since they are mutable via this.var 
const Bryan: User = {
  firstName: "Bryan",
  lastName: "Ng",
  age: 22,
};

Bryan.middleName = "Cool";

console.log(Bryan);
