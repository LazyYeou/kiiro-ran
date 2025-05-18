function binarySearch(array: number[], target:number): number | null{
    let left = 0;
    let right = array.length-1;
    while (left < right){
        let mid = Math.floor((right + left) / 2)
        if (array[mid] === target){
            return mid;
        }
        else if (array[mid] <= target){
            left = mid +1;
        }
        else{
            right = mid - 1;
        }
    
    }
    return null;
}

let array1= [1,2,3,6,7,8,10];
let jar = binarySearch(array1, 6);
console.log(jar);