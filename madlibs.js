//  Challenge: 
// Madlibs is a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

// Example: 

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!

// Solution: 
let allData = Array([4]);
allData[1] = (prompt("Enter a noun:"))
allData[2] = prompt("Enter a verb:")
allData[0] = prompt("Enter an adjective:")
allData[3] = prompt("Enter an adverb:")
console.log("Do you " + allData[1] + " your " + allData[2] + " " + allData[0] + " " + allData[3])
console.log("That's hilarious!")