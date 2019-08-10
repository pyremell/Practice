// REGEX PRACTICE //

// Using the Test Method
let myString = document.getElementById('output').innerHTML; // Grabs the string "Hello World from DOM element with ID "output"
let myRegex = /Hello/; // Searches the string for an instance of the word "Hello"
let result = myRegex.test(myString); // Returns "true" if word if found. Returns "false" if not

// Match literal strings
