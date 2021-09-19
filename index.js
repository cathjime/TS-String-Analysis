"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var wordInput = readline_sync_1.question("Enter a string:\n");
    var charCount = characterCount(wordInput);
    var charCountString = readline_sync_1.question("This string contains " + charCount + " characters.");
    var totalWords = wordCount(wordInput);
    var wordCountString = readline_sync_1.question("This string contains " + totalWords + " words.");
    var letterDupesString = readline_sync_1.question("Letter appears n times:\n");
    console.log(charCountString, wordCountString);
}
function characterCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ")
            count += 1;
    }
    return count;
}
function wordCount(str) {
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count += 1;
        }
    }
    return count;
}
main();
