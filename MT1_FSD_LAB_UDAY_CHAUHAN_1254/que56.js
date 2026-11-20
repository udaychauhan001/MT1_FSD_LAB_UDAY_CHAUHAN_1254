let message = process.argv[2];
if (!message) {
    console.log("Please enter a string.");
} else {
let reverse = message.split("").reverse().join("");
if (message.toLowerCase() === reverse.toLowerCase()) {
        console.log(message + " is a Palindrome.");
} else {
console.log(message + " is not a Palindrome.");
 }
}