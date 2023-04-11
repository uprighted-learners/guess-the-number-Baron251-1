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
start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );

  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");

  // console.log('You entered: ' + secretNumber);

  // Now try and complete the program.

  // example async await function to ask for highest number
  async function pickHighNum() {
    // Set lowest num
    const minNum = 1;

    let pickMaxNum = await ask(
      `\nPlease choose a number greater than ${minNum}: `
    );

    // Grab the value of user input
    let highNum = parseInt(pickMaxNum);

    // Confirmation message to print
    console.log(`\nYou set ${highNum} as the highest value.`);

    async function secretInput() {
      let secretNumber = await ask(`What will your secret number be?`);
      numGuess(); // at the end of secretInput running, start running numGuess
    }
    function numGen() {
      return Math.floor(Math.random() * highNum + 1);
    }

    async function numGuess() {
      while (numGen !== numGuess){
      let result = numGen();
      let guessedNum = await ask(
        `Now, allow me to guess a number between ${minNum}, and ${highNum}...Is your number ${result}?`
      );
      // call y or n function, if no, run h or lower

      // we need a yes or no answer from user if result is their number, create await async to ask y or n
      let highLow = "Did I get it?"   
      let answer = await ask(highLow)
         if (answer === "y" || answer === "Y") {
          console.log("I did it!")
          process.exit();
         } else {
          console.log("Is your number higher, or lower?")
         }
         
      // if no, we need to use higher or lower condtional (we can reassign highest/lowest value in conditionl) create await async
    }
  }
  
  secretInput();
  
  
} // While loop
pickHighNum();
} // Async function
