const sayHello = function () {
  console.log("Hello, world");
};

sayHello();

const sayHelloName = function (name) {
  console.log("Hello, " + name);
};

sayHelloName("Caliban");
sayHelloName("Miranda");
sayHelloName("Ferdinand");

/*------------- Differenc between console.log and return --------------*/

const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("John");
console.log(greeting);
