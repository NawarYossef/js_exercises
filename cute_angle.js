// challenge : 
// Write a function that takes a floating point number that represents an angle between 0 and 360 degrees and returns a String that represents that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. 
// There are 60 minutes in a degree, and 60 seconds in a minute.

// Solution: 
'use strict'
class Dms {
  constructor(deg) {
    this.deg = deg
    this.output()
  }

  findMinutes() {
    var decimalPortion = this.deg % 1;
    var minutes = decimalPortion * 60
    minutes = Math.round(minutes)
    return minutes + "'";
  }

  findSeconds() {
    var decimalPortion = this.deg % 1;
    var minutes = decimalPortion * 60
    var seconds = minutes % 1
    seconds = Math.round(seconds * 60)
    return seconds + "\""
  }

  findDegrees() {
    var degree = Math.round(this.deg)
    return degree + '°'
  }

  output() {
    if (this.deg == Math.round(this.deg)) {
      console.log(this.deg + '°' + '00' + '\'' + '00' + "\"")
    }else {
      console.log(this.findDegrees() + this.findMinutes() + this.findSeconds())
    }
  }
}

var test = new Dms(30);        // 30°00'00"
var test = new Dms(76.73);     // 76°43'48"
var test = new Dms(254.6);     // 254°35'59"
var test = new Dms(93.034773); // 93°02'05"
var test = new Dms(0);         // 0°00'00"
var test = new Dms(360);       // 360°00'00" or 0°00'00"