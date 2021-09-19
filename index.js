"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var wordInput = readline_sync_1.question("Enter a word:\n");
    var charCount = characterCount(wordInput);
    var charCountString = readline_sync_1.question("This word contains " + charCount + " characters");
    var wordCountString = readline_sync_1.question("This word contains n words:\n");
    var letterDupesString = readline_sync_1.question("Letter appears n times:\n");
    console.log(charCountString);
}
function characterCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count += 1;
    }
    return count;
}
main();
