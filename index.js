"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var wordInput = readline_sync_1.question("Enter a string:\n");
    var charCount = characterCount(wordInput);
    var charCountString = readline_sync_1.question("This string contains " + charCount + " characters.");
    var totalWords = wordCount(wordInput);
    var wordCountString = readline_sync_1.question("This string contains " + totalWords + " words.");
    var lettersObj = letterCount(wordInput);
    var letterCountString = readline_sync_1.question("Letter Count: " + lettersObj + ".");
    var palindromeCheck = isPalindrome(wordInput);
    var isPalindromeStr = readline_sync_1.question("is Palindrome: " + palindromeCheck);
    console.log(charCountString, wordCountString, letterCountString, isPalindromeStr);
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
function letterCount(str) {
    var letterCountObj = {};
    for (var i = 0; i < str.length; i++) {
        var character = str[i].toLowerCase();
        if (str[i] === " ") {
            continue;
        }
        if (!letterCountObj[character]) {
            letterCountObj[character] = 1;
        }
        else
            letterCountObj[character] += 1;
    }
    return JSON.stringify(letterCountObj);
}
function isPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        var beginningChar = str[i];
        var endChar = str[str.length - 1 - i];
        if (beginningChar !== endChar) {
            return false;
        }
    }
    return true;
}
main();
