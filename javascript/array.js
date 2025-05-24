/*
//two type arary: literal array, object like array
let literalArray = [1, 2, 3, 4, 5];
let objectLikeArray = new Array(1, 2, 3, 4, 5);
let objectLikeArray2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};

console.log(literalArray);
console.log(objectLikeArray);
console.log(objectLikeArray2);

function collectArg(...args) {
  for (let i of args) {
    console.log(i);
  }
}

collectArg(1, 2, 3, 4, 5, "a", "b", "A");
*/

const squareFunc = (x, y, z) => {
  console.log(x);
  console.log(y);
  console.log(z);
};

const squareArray = [1, 2, 3, 4, 5].map(squareFunc);
console.log(squareArray);
