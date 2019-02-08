const colors = ['white', 'black'];
const mycolors = ['blue', 'green'];

const allColors = [mycolors, 'yellow', ...colors];

console.log(allColors);

const a = {
   x: 10,
   y: 20
};

const b = {
   d: 30,
   e: 40,
   x: 'naveen'
};

const v = {
   ...a,
   f: 100,
   ...b
}

console.log(v);