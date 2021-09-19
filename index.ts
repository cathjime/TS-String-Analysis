import { question } from "readline-sync";

function main(): void {
  const firstString: string = question("Enter a word:\n");
  const charCount: string = question("This word contains n characters:\n");
  const wordCount: string = question("This word contains n words:\n");
  const letterDupes: string = question("Letter appears n times:\n");
  console.log(charCount, wordCount, letterDupes);
}

main();
