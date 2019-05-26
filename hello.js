const assert = require("assert");

const sayHello = helloTo => {
  const helloStr = `Hello, ${helloTo}!`;
  console.log(helloStr);
};

assert(process.argv.length == 3, "Expecting one argument");
const helloTo = process.argv[2];
sayHello(helloTo);
