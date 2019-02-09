function buildName(firstName = 'x', lastName = 'y') {
   const fullName = firstName + " " + lastName;
   return fullName;
}

console.log(buildName());
console.log(buildName('naveen'));
console.log(buildName('naveen', 'pete'));
console.log(buildName('a', 'b', 'c'));
