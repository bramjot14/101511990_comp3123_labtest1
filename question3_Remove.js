// Remove.js
// This script will delete all files inside Logs folder and then remove the folder.

const fs = require("fs");
const path = require("path");

// Getting path to Logs folder
const logsDir = path.join(__dirname, "Logs");

// Checking if Logs exists
if (fs.existsSync(logsDir)) {
 
  const files = fs.readdirSync(logsDir);  // Reading all files inside Logs

  // Deleting each file
  for (let file of files) {
    fs.unlinkSync(path.join(logsDir, file));
    console.log(`delete files...${file}`);
  }

  // Removing Logs folder
  fs.rmdirSync(logsDir);
}
