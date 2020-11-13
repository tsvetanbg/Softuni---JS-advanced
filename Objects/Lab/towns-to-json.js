/*
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
•	The output should be an array of objects wrapped in JSON.stringify(). 
•	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!


*/

function solve(arr) {
    let data = arr
        .map(a => a
            .split("|")
            .filter(a => a.length > 0 )
            .map(a => a.trim())
        .map(a => !isNaN(a) ? Number(Number(a).toFixed(2)) : a ));
       
    let keys = data.shift();

    result = [];

    data.forEach(row => {
        result.push({
            [keys[0]]: row[0],
            [keys[1]]: row[1],
            [keys[2]]: row[2],
        })
    });

     return JSON.stringify(result);
}


solve(
    ['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']


);