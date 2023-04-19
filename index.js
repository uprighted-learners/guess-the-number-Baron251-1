// Imports readline and allows us to do input in and out
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// ! DO NOT TOUCH ABOVE THIS LINE
// Don't flood the thing with async functions
start();
compGuess();
// ! To use await ask, you must declare a variable, then "await ask (whatever)" after the `=`. The users input will change the variable from `whatever` to the users input
async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
}
// ? Functionality for computer guessing
//
async function compGuess() {
  // ? Define the variables
  let minNum = 1;
  console.log(minNum);
  let maxNum = 100;
  let secretNum = await ask(`Pick a number between ${minNum} and ${maxNum} _>`);
  let numGuess = Math.round((minNum + maxNum) / 2);
  if (secretNum < minNum || secretNum > maxNum) {
    console.log(
      "Please choose a number within the specified range, or learn how to count."
    );
  } else {
    let input = await ask(
      `Let us begin. Is your number ${numGuess}? "y", or "n" _>`
    );
    // ? Logic for computer win
    if (input == "y" && numGuess == secretNum) {
      console.log("I did it!");
      process.exit();
    }
  }

  // ? Logic for computer wrong answer/modify range
  while (numGuess !== secretNum) {
    let answer = await ask("Is your number higher(h) or lower(l)? _>");
    console.log(`numGuess: ${numGuess}`)
    if (answer === "h" && secretNum > numGuess) {
      minNum = numGuess + 1;
      numGuess = Math.round((minNum + maxNum) / 2);
      let input = await ask(
        `Alright. Is your number ${numGuess}? "y", or "n" _>`
      );
      if (input == "n" && numGuess == secretNum){
        console.log(`I smell smoke. Are your pants on fire? ... LIAR, your number IS ${numGuess}, I WIN`)
        process.exit()
      }
      // console.log(`Reminder, your number is ${secretNum}`)
      // ? Logic for computer win
      else if (input == "y" && numGuess == secretNum) {
        console.log("I did it!");
        process.exit();
      }
    } else if (answer === "l" && secretNum < numGuess) {
      maxNum = numGuess - 1;
      numGuess = Math.round((minNum + maxNum) / 2);
      let input = await ask(
        `Alright. Is your number ${numGuess}? "y", or "n" _>`
        );
        // console.log(`Reminder, your number is ${secretNum}`)
      // ? Logic for computer win
      if (input == "n" && numGuess == secretNum){
        console.log(`I smell smoke. Are your pants on fire? ... LIAR, your number IS ${numGuess}, I WIN`)
        process.exit()
      }
      else if (input == "y" && numGuess == secretNum) {
        console.log("I did it!");
        process.exit();
      }
    } else {
      console.log(
        "You had two options, and you just had to be a rebel. 'h', or 'l'. _>"
      );
      // console.log(`Your number is ${secretNum}`)
    }
    // console.log(minNum);
  }

  
} // ! compGuess end
