// Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.
function wrongGuessCount(word, guesses) {
    return guesses
        .filter(letter => word.indexOf(letter) < 0)
        .length
  }
  
  console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)