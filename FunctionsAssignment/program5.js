// 5.Create an anonymous function that takes an array of numbers and 
//   returns the sum of all the numbers

(function (arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i] 
    }
    console.log(sum)
})([1,2,3,4,5])