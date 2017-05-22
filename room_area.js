// Challenge:
// Build a program that asks a user for the length and width of a room in meters and then logs to the console the area of the room in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet
// Do not worry about validating the input at this time. Use the prompt() function to collect user input.

// Solution :
var length = prompt("Please eneter the length of the room")
var width  = prompt("Please eneter the width of the room")
console.log("The area of the room in square meter is: " + (length * width))
console.log("The area of the room in square feet is: " + ((length * width) * 10.7639).toFixed(2))