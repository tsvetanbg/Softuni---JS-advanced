/*
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of your function. Save the number of equal pairs you find and return it.
*/

function solve(matrix) {

    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let nextRow = matrix[i + 1];

        for (let j = 0; j < currentRow.length; j++) {
          
            let currentValue = currentRow[j];
            
            if( j != currentRow.length - 1){
                let nextValue = currentRow[j + 1];
                currentValue === nextValue ? result += 1 : result = result ;
            }
            
            if(i != matrix.length - 1){
                let nextRowValue = nextRow[j];
                currentValue === nextRowValue ? result += 1 : result = result ;
            }
        }
    }
    console.log(result);
}

solve(
    [
        [1, 1, 3, 4],
        [5, 1, 8, 8],
        [9, 10, 12, 12],
        // ['no', 'yes', 'yo', 'ho'],
        // ['yes', 'yes', 'yes', 'g'],
        // ['not', 'yes', '5', 'f']
    ]


)