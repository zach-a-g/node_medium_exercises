// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
// Assuming the file file1.txt contains the text: "Hello, I am file 1."

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('filename: ', function(filename) {
    readline.close();
    fs.readFile(filename, function(error, buffer) {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        console.log(upperCased);
    });
});

// CHANGE "START" CONTENT IN PACKAGE FILE