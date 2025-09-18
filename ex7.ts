let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;

function getPersonInfo(name: string, age: number, isStudent: boolean): string {
  return `${name} is ${age} years old and is a student: ${isStudent}`;
}

console.log(getPersonInfo(name, age, isStudent)); 