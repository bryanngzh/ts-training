// Attempt 1:
// function sortArray<T>(arr: T[]): T[] {
//   arr = arr.sort();
//   return arr;
// }

// console.log(sortArray([1, 3, 2]));
// console.log(sortArray(["D", "Z", "A"]));

// Attempt 2:
type Sort<T> = (array: T[]) => T[];

const sortAscendingNumber: Sort<number> = (arg) => {
  return arg.sort();
};

const sortDescendingNumber: Sort<number> = (arg) => {
  return arg.sort((a, b) => b - a);
};

console.log(sortAscendingNumber([1, 3, 2]));
console.log(sortDescendingNumber([1, 3, 2]));
