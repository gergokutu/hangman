// two synthaxes are the same because JS works this way...
function wrongGuessCount(word, guesses) {
    console.log(guesses)
    return guesses.filter(letter => word.indexOf(letter) < 0).length
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['h', 'e', 'l']), 'should be:', 0)

function wrongGuessCount(word, guesses) {
    console.log(guesses)
    return guesses
        .filter(letter => word.indexOf(letter) < 0)
        .length
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['h', 'e', 'l']), 'should be:', 0)

// and also the 3rd :) :)

function wrongGuessCount(word, guesses) {
    console.log(guesses)
    let filter = guesses.filter(letter => word.indexOf(letter) < 0)
    let length = filter.length
    return length
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['h', 'e', 'l']), 'should be:', 0)