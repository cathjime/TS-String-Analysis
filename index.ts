import { question } from "readline-sync";

function main(): void {
  const wordInput: string = question("Enter a word:\n");
  const charCount = characterCount(wordInput);
  const charCountString: string = question(
    `This word contains ${charCount} characters.`
  );
  const wordCountString: string = question("This word contains n words:\n");
  const letterDupesString: string = question("Letter appears n times:\n");

  console.log(charCountString);
}

function characterCount(str: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    count += 1;
  }

  return count;
}

main();
