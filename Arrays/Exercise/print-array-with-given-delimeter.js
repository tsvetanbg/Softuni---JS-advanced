/*
The input comes as an array of strings. The last element of the array is the delimiter.
The output is the same array, printed on the console, each element separated from the others by the given delimiter.
*/

function solve(arr) {
    console.log(arr.join(arr.pop()));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])