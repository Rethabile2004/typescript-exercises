type MyType = number | string;

function checkType(value: MyType): void {
  if (typeof value === "string") {
    console.log("It's a string");
  } else {
    console.log("It's a number");
  }
}
checkType('I love typescript');