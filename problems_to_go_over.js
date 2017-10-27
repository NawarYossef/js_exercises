// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.


function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

function last (words) {
  return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

last('man i need a taxi up to ubud') // === ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'];
last('what time are we climbing up the volcano') // === ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']; 
last('take me to semynak') // === ['take', 'me', 'semynak', 'to']); 



//////////////////////////////////////////////////



// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases.


function repeats(arr) {
  let i;
  let sum = 0;
  arr.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      sum += arr[i];
      i--;
    }
  }

  return sum;
};

function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};


repeats([4,5,7,5,4,8]) // === 15;
repeats([9, 10, 19, 13, 19, 13]) // === 19;
repeats([16, 0, 11, 4, 8, 16, 0, 11]) // === 12;
repeats([5, 17, 18, 11, 13, 18, 11, 13]) // === 22;
repeats([5, 10, 19, 13, 10, 13]) // === 24;


// ////////////////////////////////////////////////////////////////////////////////