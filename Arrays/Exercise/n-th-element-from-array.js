/*
The input comes as an array of strings. The last element is N - the step.
The output is every element on the N-th step starting from the first one. If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new line.
*/

function solve(arr) {
    
    let step = Number(arr.pop());
    let result = [];

    for(let i = 0; i < arr.length; i += step){
        result.push(arr[i]);
    }

    console.log(result.join('\n'));
};

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
);