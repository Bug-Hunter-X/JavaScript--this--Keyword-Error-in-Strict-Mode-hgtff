function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);
  console.log(z); // Output: 30

  // Correct usage of this keyword within an object
  const obj = {
    x: 30,
    printX: function() {
      console.log(this.x); // Output: 30
    }
  };
  obj.printX();

  //Alternative approach using an arrow function which lexically binds 'this'
  const bar2 = () => {
    this.x = 40;
    console.log(this.x); //this will output the x from the global scope
  };
  bar2();
}

bar();