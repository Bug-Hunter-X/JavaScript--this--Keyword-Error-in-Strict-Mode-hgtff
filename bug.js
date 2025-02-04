function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);
  console.log(z); // Output: 30

  //Incorrect usage of this keyword. this will not work in strict mode
  this.x = 30; 
  console.log(this.x); // Throws an error in strict mode because 'this' is undefined in this context
}

bar();