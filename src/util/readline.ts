import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function read(promptText: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(promptText, (input) => resolve(input));
  });
}

export function close(): void {
  rl.close();
}
