// Initialize counters
let charCount = 0;
let wordCount = 0;
let vowelCount = 0;
let inWord = false;

// Input sentence (prompt user to enter a sentence ending with a period)
let sentence = prompt("Enter the sentence ending with a period:");

// Iterate through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    let c = sentence[i];

    // Check for the end of the sentence
    if (c === '.') {
        break; // Exit loop on encountering the period
    }

    // Count the character
    charCount++;

    // Check for vowels
    if ("aeiouAEIOU".includes(c)) {
        vowelCount++;
    }

    // Check for word boundaries
    if (c === ' ') {
        if (inWord) {
            wordCount++;
            inWord = false;
        }
    } else {
        inWord = true;
    }
}

// Check for the last word if the sentence doesn't end with a space
if (inWord) {
    wordCount++;
}

// Output the results
console.log("Number of characters:", charCount);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
[]