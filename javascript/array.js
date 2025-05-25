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

let newArr = Array.from(objectLikeArray2);

console.log(literalArray);
console.log(objectLikeArray);
console.log(newArr);
console.log(newArr == literalArray);
