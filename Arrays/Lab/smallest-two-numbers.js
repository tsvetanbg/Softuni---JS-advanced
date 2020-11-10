/*
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/

function solve(arr) {

    let result = arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

    console.log(result)
}

solve([3, 0, 10, 4, 7, 3]);