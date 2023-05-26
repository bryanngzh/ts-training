function repeatString(str: string, num: number): string {
  let str2: string = "";
  for (let i = 0; i < num; i++) {
    str2 += str;
  }
  return str2;
}

console.log(repeatString("Hello world!", 10));
