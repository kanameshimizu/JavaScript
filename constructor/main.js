function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 18);
const sun = new Person('Sun', 18);

console.log(Person);
console.log(bob);
console.log(tom);
console.log(sun);