const square = function (x) {
  return x * x;
};
console.log(square);

const squareArrow= (num) => num * num;
console.log(square(8));

// getFirstName()
  // pass string, return first part
const getFirstName = (name) => name.split(' ')[0 ];
console.log(getFirstName('Sevan Badal'));

// arguments object - no longer bound with arrow functions
// this keyword - no longer bound
const add = function (x, y) {
  console.log(arguments)
  return x + y
}
console.log(add(2, 3, 100));

const addArrow = (x, y, z) => {
  return x + y + z;
};
console.log(addArrow(100, 2, 2))

// this keyword
const user = {
  name: 'Sevan',
  cities: ['New York', 'Essex', 'Chengdu'],
  printCities: function () {
    return this.cities.map((city) => `${this.name} lived in ${city}`);
  }
}
console.log(user.printCities());

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: function (degree) {
    return this.numbers.map((number) => number * degree);
  }
}
console.log(multiplier.multiplyBy(2));
