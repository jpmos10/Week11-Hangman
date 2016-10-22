// Load the NPM Package Random-Words
var randomWords = require('random-words');

// Set up variable to save the word from the Random-Words function
var computerWordChoice = randomWords();

// Set up the export to be able to use the random word in word.js
exports.computerWordChoice = computerWordChoice;