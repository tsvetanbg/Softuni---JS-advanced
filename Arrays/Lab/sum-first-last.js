/* Write a function that calculates and prints the sum of the first and the last elements in an array.
   The input comes as array of string elements holding numbers.
   The output is the return value of your function.
*/

function solve(arr) {
    
    let firstNum = Number(arr.slice(0,1));
    let lastNum = Number(arr.slice(arr.length - 1));
    
    console.log(firstNum + lastNum);
}


solve(['20', '30', '40']);
