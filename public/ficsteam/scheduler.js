const cron = require("node-cron");
const path = require("path");
const { exec } = require("child_process");
const fs = require("fs");

// Correct jsonPath to point to the file in the backend folder
const jsonPath = path.join(__dirname, "pakistani_tech_news.json"); // it's relative to the `Irada backend` directory

// Checking if the file exists when the server starts
fs.access(jsonPath, fs.constants.F_OK, (err) => {
  console.log("Checking for pakistani_tech_news.json file...", jsonPath);
  if (err) {
    console.log("pakistani_tech_news.json file not found, generating it...");
    generateNewsFile();
  } else {
    console.log("pakistani_tech_news.json file found.");
  }
});

// Function to generate the news file
function generateNewsFile() {
  const scriptPath = path.join(__dirname, "scripts", "news_scraper.py");

  exec(`py "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error running scraper:", error);
      return;
    }
    if (stderr) {
      console.error("stderr:", stderr);
      return;
    }
    console.log("Scraper output:", stdout);
  });
}

// Scheduling task to run every 12 hours
cron.schedule("0 */12 * * *", () => {
  console.log("Running scheduled news scraper...");
  generateNewsFile();
});
