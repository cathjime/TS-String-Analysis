"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = readline_sync_1.question("Enter a word:\n");
    var charCount = readline_sync_1.question("This word contains n characters:\n");
    var wordCount = readline_sync_1.question("This word contains n words:\n");
    var letterDupes = readline_sync_1.question("Letter appears n times:\n");
    console.log(charCount, wordCount, letterDupes);
}
main();
