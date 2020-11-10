/*
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
*/

function solve(matrix) {

    let diagonals = [0, 0];
   
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        
        diagonals[0] += (row[i]);
        diagonals[1] += (row[matrix.length - 1 - i]);
    }

    console.log(diagonals.join(" "));
}

solve(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]

)