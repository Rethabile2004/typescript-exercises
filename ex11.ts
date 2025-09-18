class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return "Animal speaks";
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  override speak(): string {
    return "Woff!";
  }
}

const dog:Dog=new Dog('Blake','man cow');

console.log(dog.speak());