// Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.
function wrongGuessCount(word, guesses) {
    return guesses
        .filter(letter => word.indexOf(letter) < 0)
        .length
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)

// Write a function that takes a word, and a array of guesses, and returns a string with dashes or letters with spaces in between.
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


