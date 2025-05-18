package main

import (
	"fmt"
)

func main() {
	initArray := [5]int{1, 2, 3, 4, 5}
	fmt.Print(initArray)
}

// func checkPrime(x int) bool {
// 	if x == 2 || x == 3 {
// 		return true
// 	} else if x < 2 {
// 		return false
// 	} else if x%2 == 0 {
// 		return false
// 	} else {
// 		for i := 3; i < int(math.Sqrt(float64(x))+1); i += 2 {
// 			if int(x)%i == 0 {
// 				return false
// 			}
// 		}
// 	}
// 	return true
// }
