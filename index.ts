import { question } from "readline-sync";

function main(): void {
  const wordInput: string = question("Enter a string:\n");
  const charCount: number = characterCount(wordInput);
  const charCountString: string = question(
    `This string contains ${charCount} characters.`
  );
  const totalWords: number = wordCount(wordInput);
  const wordCountString: string = question(
    `This string contains ${totalWords} words.`
  );
  const lettersObj: string = letterCount(wordInput);
  const letterCountString: string = question(`Letter Count: ${lettersObj}.`);

  const palindromeCheck: boolean = isPalindrome(wordInput);
  const isPalindromeStr: string = question(`is Palindrome: ${palindromeCheck}`);

  console.log(
    charCountString,
    wordCountString,
    letterCountString,
    isPalindromeStr
  );
}

function characterCount(str: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") count += 1;
  }

  return count;
}

function wordCount(str: string): number {
  let count: number = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count += 1;
    }
  }
  return count;
}

function letterCount(str: string): string {
  let letterCountObj = {};

  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();

    if (str[i] === " ") {
      continue;
    }
    if (!letterCountObj[character]) {
      letterCountObj[character] = 1;
    } else letterCountObj[character] += 1;
  }
  return JSON.stringify(letterCountObj);
}

function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    let beginningChar = str[i];
    let endChar = str[str.length - 1 - i];
    if (beginningChar !== endChar) {
      return false;
    }
  }
  return true;
}

main();
