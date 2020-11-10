 /* Write a function that finds the elements at even positions in an array.
    The input comes as array of string elements.
    The output is the return value of your function. Collect all elements in a string, separated by space.
*/

function solve(arr) {
    
    let result = [];

    for (let i = 0; i < arr.length ; i+=2){
        result.push(arr[i]);
    }

    console.log(result.join(' '))
}

solve(['20', '30', '40'])