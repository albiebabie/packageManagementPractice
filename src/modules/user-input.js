const readlineSync = require("readline-sync");
const fs = require("fs");

module.exports = class UserInput {
    static getFile() {
        let filePath;
        while (!filePath) {
            const input = readlineSync.question("Please enter an image file path: \n");
            if (fs.existsSync(input)) {
                filePath = input;
            } else {
                console.log("ERROR: file does not exist!");
            }
        }
        return filePath;
    }
};
/Users/alban/Documents/Training/packageManagement/src/test-images
/Users/alban/Documents/Training/packageManagement/src/index.js