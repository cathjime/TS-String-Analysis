import { question } from "readline-sync";

function main(): void {
  const wordInput: string = question("Enter a string:\n");
  const charCount = characterCount(wordInput);
  const charCountString: string = question(
    `This string contains ${charCount} characters.`
  );
  const totalWords = wordCount(wordInput);
  const wordCountString: string = question(
    `This string contains ${totalWords} words.`
  );
  const lettersObj = letterCount(wordInput);
  const letterCountString: string = question(`Letter Object: ${lettersObj}.`);

  console.log(charCountString, wordCountString, letterCountString);
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

function letterCount(str: string) {
  let letterCountObj = {};

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const space = " ";
    if (str[i] === space) {
      continue;
    }
    if (!letterCountObj[character]) {
      letterCountObj[character] = 1;
    } else letterCountObj[character] += 1;
  }
  return letterCountObj;
}

main();
