// 9.Write a function reverseArray(arr) that returns a new array 
//   with the elements of arr in reverse order.

function reverseArray(arr){
    let rev_arr = []
    for(let i=arr.length-1;i>=0;i--){
        rev_arr.push(arr[i])
    }
    return rev_arr
}

let arr = [1,2,3,4,5]
console.log("array => ",arr)

let rev = reverseArray(arr)
console.log("revsersed array => ",rev)