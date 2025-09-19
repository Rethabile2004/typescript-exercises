"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Animal speaks";
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        return "Woff!";
    }
}
const dog = new Dog('Blake', 'man cow');
console.log(dog.speak());
//# sourceMappingURL=ex11.js.map