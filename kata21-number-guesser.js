const prompt = require("prompt-sync")({ sigint: true });
const randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

while (true) {
  let answer = prompt("Guess a number: ", undefined);
  console.log("You answered: " + answer);
  console.log(guessNumber(Number(answer)));
  if (Number(answer) === randomNumber) {
    break;
  }
}

function guessNumber(num) {
  if (num === randomNumber) {
    return `You got it! You took ${attempts} attempts!`;
  } else {
    if (typeof num !== "number" || !num) {
      return "Not a number! Try again!";
    } else if (num < randomNumber) {
      attempts++;
      return "Too Low!";
    } else if (num > randomNumber) {
      attempts++;
      return "Too High!";
    }
  }
}
