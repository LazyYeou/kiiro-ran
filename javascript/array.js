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

let newArr = [1, 2, 3];

let newArr2 = newArr.map((item) => (item = item * 2));

let newArr3 = newArr.forEach((item) => (item = item * 2));

console.log(newArr2);
console.log(newArr3);
