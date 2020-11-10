/*
Write a function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it.
*/

function solove(matrix) {

    let result = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        row.forEach(el => {
            if (el > result) {
                result = el;
            }
        })
    });

    console.log(result);
}

solove(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]

)