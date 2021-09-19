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
  const letterDupesString: string = question("Letter appears n times:\n");

  console.log(charCountString, wordCountString);
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

main();
