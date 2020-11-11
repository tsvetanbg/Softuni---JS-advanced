/*
Write a function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings.
*/

function solve(arr) {
   
   let result = arr.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        }else if(a.length === b.length){
            return a.localeCompare(b);
        }
    });

    console.log(result.join('\n'));
};

solve(
    ['test', 
'Deny', 
'omen', 
'Default']

)