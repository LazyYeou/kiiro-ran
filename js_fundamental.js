// const { type } = require("node:os");

let userName; //declare variable and using let keyword
userName = "sigma"; //assign value to variable
//varible name that contain more than two letter use camelCase

const PI = 3.14; //declare constant variable
/*constant usually can use camelCase or UPPERCASE
    depends on the context. UPPERCASE used for hard-code value (fixed value or somethind that already embed with program and will no change) for, constant like PI, GRAVITY, MAX_USER usually use UPPERCASE
    Meanwhile camelCase used for regular variable
*/

//-- DATA TYPE--

const num = 10; //number, range of num is (2^53 -1 to -(2^53 - 1))
const nan = NaN; //not a number, one of special numeric values
const infinity = Infinity; //infinity, one of special numeric values
const bigInt = 100000000n; //bigint, value to store big number more than number range (ended with n)
const nullValue = null; //null, means the variable is empty
const undefinedValue = undefined; //undefined, means the variable is declared but still doesnt have value yet
const stringValue = "string"; //string
const backtickString = `string with backtick ${stringValue}`; //string with backtick can embed variable
const boolean = true; //boolean
const object = {}; //object

// result = prompt("input your name", ""); //show message ask user to input text
// alert(result); //show message window
// isConfirmed = confirm("are you sure?"); //show message window with yes/no button

//falsy value => [false, null, undefined, 0, NaN, ""]
//truthy value => other values

// -- OPERATOR --

// console.log(+false); //unary + operator (convert non number value to number)

// let age = prompt("input your age", 0);

// let message = age < 10 ? "Child" : age < 20 ? "Teen" : age < 60 ? "Adult" : "Old";
// console.log(message);

// console.log(bigInt ?? "sigma");
// console.log(nullValue ?? "sigma");
// console.log(undefinedValue ?? "sigma2");

// let expressionFunc = function () {
//   console.log("aku sigma");
// };

// expressionFunc();

let a = "a";

console.log(a.concat("1", " ", "3", "Bar"));
