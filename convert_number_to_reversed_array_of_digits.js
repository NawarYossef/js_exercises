// Challenge: 
// Write a function that takes a positive integer as an argument and returns that number with its digits reversed

// Solution: 
function reversedNumber(num) {
  let revNum = Array.from(String(num)).reverse().join('');
  return Number(revNum);
}

reversedNumber(12345); // 54321
reversedNumber(12213); // 31221
reversedNumber(456);   // 654
reversedNumber(12000); // 21 # Note that zeros get dropped!
reversedNumber(1);     // 1