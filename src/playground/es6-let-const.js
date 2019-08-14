var nameVar = 'Sevan';
var nameVar = 'Badal';
nameVar = 'Golnazarian';
console.log('nameVar', nameVar)

let nameLet = 'Sevan';
nameLet = 'Badal'
console.log('nameLet', nameLet)

const nameConst = 'Sevan';
console.log('nameConst', nameConst)

function getPetName() {
  var petName = 'Hal';
  return petName;
}

// block scope - let and const but not var
var fullName = 'Sevan Badal';

if (fullName) {
  // not bound to the if block
  var firstName = fullName.split(' ')[0]
}
console.log(firstName)
