function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);
console.log("four" / 5);

const loopyLighthouse = (range, multiples, words) => {
  for (let number = range[0]; number <= range[1]; number++) {
    if (number % multiples[0] === 0 && number % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (number % multiples[0] === 0) {
      console.log(words[0]);
    } else if (number % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(number);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
