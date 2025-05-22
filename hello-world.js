function isPalindrome(x) {
  if (x < 0 || (x % 10 == 0 && x !== 0)) {
    return false;
  }
  revert_num = 0;
  temp_x = x;
  while (x != 0) {
    revert_num = revert_num * 10 + (x % 10);
    x = Math.floor(x / 10);
    console.log(x, revert_num);
  }
  return temp_x === revert_num;
}

console.log(isPalindrome(121));
