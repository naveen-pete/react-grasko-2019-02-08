function a() {
   return function () {
      console.log('hi');
   };
}

// a()();

var b = a();
b();