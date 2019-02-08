function sum(a, b) {
   return a + b;
}

function sumRest(...numbers) {
   return numbers.reduce((total, n) => {
      return total + n;
   }, 0);
}

console.log(sum(10, 20));

console.log(sumRest(10, 20, 30, 40, 50));

console.log(sumRest(2, 4, 7));
