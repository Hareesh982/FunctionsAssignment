//10.Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. 
//What happens when you call a function before it’s declared?



name() // Entire function declaation is hoisted to the top
city() // function declaration is hoisted not function body


// function declaration

function name(){
    console.log("Hareesh")
}

// function expression


let city = function(){
    console.log("Bangalore")
}


