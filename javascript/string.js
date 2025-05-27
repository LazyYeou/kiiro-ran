/*
let initiateString = "hello world";
let initFromOtherTypes = String(true);
let convertToString = (123).toString();

//string concatination
let firstName = "john";
let lastName = "doe";
let fullName = firstName + "  " + lastName;
fullName = firstName.concat(" ", lastName);
//also can use other type as argument
console.log(fullName.concat(true, 32)); //this is what makes javascript easy to get bugged

//string using backticks
let name1 = `sigma`;
let callName = `Hello ${name1}`; //can add variable using backticks

//reverse string
function reverseString(s) {
  s = s.split(""); //split string by separator ("") and convert to array
  console.log(s);
  s = s.reverse(); //reverse array
  console.log(s);
  s = s.join(""); //join array to string
  console.log(s);
}


//instance string method
//String.prototype.at
let newString = "HelloWorld";
let index = -1;
console.log(`${newString.at(index)}`); //return the character at index @params (handle negative @params, safer)
console.log(newString[-1]); //cant acces negative index

//String.prototype.charAt
console.log(newString.charAt(-1)); //same as String.prototype.at but return "" if index out of range

//String.prototype.endsWith
console.log(newString.endsWith("World")); //check if @params is end of string

function ew(reference, suffix) {
  let len = suffix.length * -1;
  for (let i = -1; i >= len; i--) {
    console.log(suffix.at(i), reference.at(i));
    if (suffix.at(i) !== reference.at(i)) {
      return false;
    }
  }
  return true;
} //String.prototype.endsWith maybe looks like this

//String.prototypes.includes
let sentece = "mclaren is faster than redbull";
console.log(sentece.includes("mc "));

function inc(sentence, word) {
  let len = sentence.length;
  let target = word.length;
  for (let i = 0; i < len; i++) {
    if (sentece[i] === word[0]) {
      for (let j = 0; j < target; j++) {
        console.log(sentence[i + j], word[j]);
        if (sentence[i + j] !== word[j]) {
          return false;
        }
      }
    }
  }
  return true;
}
console.log(inc(sentece, "is f"));

//String.prototypes.indexOf
//initial @position is 0

function myIndexOf(sentence, searchString, position = 0) {
  for (let i = position; i < sentence.length; i++) {
    if (searchString[0] == sentence[i]) {
      for (let j = 0; j < searchString.length; j++) {
        if (searchString[j] != sentence[i + j]) {
          break;
        }
      }
      return i;
    }
  }
  return -1;
}
console.log(sentece.indexOf("eb")); //return the index of @searchString greater than @position
console.log(myIndexOf(sentece, "eb"));


//String Compare Lexicographically
function strCompare(a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
}
*/
