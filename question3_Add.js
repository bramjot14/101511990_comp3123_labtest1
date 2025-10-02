// Add.js
// This script will create a Logs folder and add 10 log files inside it.

const fs = require("fs");
const path = require("path");

// Creating Logs folder if not exists
const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Now Change working directory to Logs
process.chdir(logsDir);

// Here Creating 10 log files and write something inside them
for (let i = 0; i < 10; i++) {
  let fileName = `log${i}.txt`;
  fs.writeFileSync
  (fileName, `This is log file number ${i}`);
  console.log(fileName); // show file created
}
