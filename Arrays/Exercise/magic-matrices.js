/*
Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
*/

function solve(matrix) {

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let column = [];
        result.push(row.reduce((acc, x) => acc + x));

        for (let j = 0; j < matrix.length; j++) {
            column.push(matrix[j][i]);
        }
        result.push(column.reduce((acc, x) => acc + x));
    };

    console.log(result.every(a => a === result[0]));
};

solve(

    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   

)