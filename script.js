// REGEX PRACTICE //

// Using the Test Method
let myString = document.getElementById('output-1').innerHTML; // Grabs the string "Hello World from DOM element with ID "output".
let myRegex = /Hello/; // Searches the string for an instance of the word "Hello".
let result1 = myRegex.test(myString); // Returns "true" if word if found. Returns "false" if not.

// Match Literal Strings
let waldoIsHiding = document.getElementById('output-2').innerHTML;
let waldoRegex = /Waldo/; // Searches the string for the word "Waldo". The string must be a literal match to return true.
let result2 = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = document.getElementById('output-3').innerHTML;
let petRegex = /dog|cat|bird|fish/; // Searches for dog OR cat OR bird OR fish and returns true if found.
let result3 = petRegex.test(petString);

// Ignore case while matching
let fccString = document.getElementById('output-4').innerHTML;
let fccRegex = /FREECODECAMP/i; // Append the flag 'i' to the end of the regex to tell it to ignore case of string.
let result4 = fccRegex.test(fccString);

// Extract Matches
let extractStr = document.getElementById('output-5').innerHTML;
let codingRegex = /coding/;
let result5 = extractStr;

// Find More Than the First Match
let twinkleStar = document.getElementById('output-6').innerHTML;
let starRegex = /twinkle/gi; // The flag 'g' returns all matches. The flag 'i' ignores case.
let result6 = twinkleStar.match(starRegex);

// Match Anything with Wildcard Period
let exampleStr = document.getElementById('output-7').innerHTML;
let unRegex = /.un/gi; // Use the Wildcard Period to match characters of a string. This example returns "fun".
let result7 = exampleStr.match(unRegex);

// Match Single Character with Multiple Possibilities
let quoteSample = document.getElementById('output-8').innerHTML;
let vowelRegex = /[aeiou]/gi; // Searches all letters specified within brackets. Can be used to find specific matches within words, i.e. /B[iua]g/ would find all instances of Big, Bug, and Bag.
let result8 = quoteSample.match(vowelRegex);

// Match Letters of the Alphabet
let quoteSample2 = document.getElementById('output-9').innerHTML;
let alphabetRegex = /[a-z]/gi; // Searches within the entire range specified within the brackets. Example: [a-d] would return a, b, c, and d.
let result9 = quoteSample2.match(alphabetRegex);

// Match Numbers and Letters of the Alphabet
