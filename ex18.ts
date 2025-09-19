function splitName(firstName: string): [string, string] {
  return firstName.split(" ") as [string,string];
}
const [first, last] = splitName("Gun Rethabile");
console.log(first,last)
console.log("Hello")