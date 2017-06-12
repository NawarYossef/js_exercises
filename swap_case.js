// challenge : 
// Write a function that takes a string as an argument and returns a new string in which lowercase letters replace every uppercase and vice versa. Leave all other characters unchanged.

// Solution: 
function swapcase(string) {
  let output = Array()
  string.split('').forEach((letter) => {
    if (letter === ' ') {
      output.push(letter)
    } else if (letter === letter.toLowerCase()) {
      output.push(letter.toUpperCase())
    } else {
      output.push(letter.toLowerCase())
    }
  })
  return output.join('');
}


swapcase('CamelCase')         // 'cAMELcASE'
swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'







