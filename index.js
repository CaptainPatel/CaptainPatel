import fs from 'fs';

const replaceLine = (filePath, newLine) => {
  // Read the file content
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

  // Replace the 5th line with the new line
  lines[4] = newLine;

  // Write the modified content back to the file
  fs.writeFileSync(filePath, lines.join('\n'));
};
const d = new Date();
// Usage example
const filePath = 'README.md'; // Replace with your file path
const newLine = `- <p align="center">The Date is <span>${d.toDateString()}</span></p>`; // Replace with the new line content
replaceLine(filePath, newLine);