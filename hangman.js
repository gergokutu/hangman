// step1: Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.
function wrongGuessCount(word, guesses) {
    // same syntax like:
    // return guesses.filter(letter => word.indexOf(letter) < 0).length
    // because JS works this way and she knows it somehow... and does not puts ; at the end of the line in this case... ahhh
    return guesses
        .filter(letter => word.indexOf(letter) < 0)
        .length
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)

// step2: Write a function that takes a word, and a array of guesses, and returns a string with dashes or letters with spaces in between.
function showGuess(word, guesses) {
    return word
        // first split the word into letters
        .split('')
        // for each letter, transform it to an underscore
        //  if it was not guessed, or else leave it untouched
        .map(letter => guesses.indexOf(letter) < 0 ? '_' : letter)
        // then join the letters/underscores back together,
        //  but with some extra spacing between each
        .join(' ');
}

console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')

// step3: Write a function that takes a word, and an array of guesses, and returns if the player has won or not.
function isWinner(word, guesses) {
    // checks whether all letters have been guessed
    return word
      .split('')
      .filter(letter => guesses.indexOf(letter) >= 0)
      .length === word.length;
  }

console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false)
console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true)

// step4: Write a function that takes a word and an array of guesses, and checks if the player lost, won, or asks for the next letter.
// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    // check if won
    // ask for the next letter
    let numWrongGuesses = wrongGuessCount(word, guesses);
    console.log(`[${showGuess(word, guesses)}] wrong guesses: ${numWrongGuesses}`);
  
    if (numWrongGuesses === 6) {
      console.log("You've lost!");
    }
    else if (isWinner(word, guesses)) {
      console.log("You've won!");
    }
    else {
      rl.question('next letter? ', answer => {
        const letter = answer.trim()[0];
        console.log('guessing letter:', letter);
        // (actually, you'd need to validate this as well)
        next(word, guesses.concat([ letter ]));
      });
    }
  }

  next('hello', [])