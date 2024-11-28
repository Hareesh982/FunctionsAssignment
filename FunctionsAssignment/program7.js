// 7.Write a function sum(...numbers) that takes any number of arguments
//   and returns the sum of those arguments.

function sum(){
    let len = arguments.length
    let sum = 0
    for (let i=0;i<len;i++){
        sum = sum + arguments[i]
    }
    return sum
}
console.log(sum(2,4,5,3,1,6,5,4,7))