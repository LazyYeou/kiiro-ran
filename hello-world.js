function binarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        var mid = Math.floor((right + left) / 2);
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] <= target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return null;
}
var array1 = [1, 2, 3, 6, 7, 8, 10];
var jar = binarySearch(array1, 6);
console.log(jar);
