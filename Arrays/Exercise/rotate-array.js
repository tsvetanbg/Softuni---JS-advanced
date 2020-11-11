/*
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
*/

function solve(arr) {

    let rotations = Number(arr.pop());
    let result = arr.slice();

    rotations = rotations % arr.length;

    for (let i = 0; i < rotations; i++) {

        let lastElement = result
            .splice(result.length - 1, 1)
            .join('');

        result.splice(0, 0, lastElement);
    }

    console.log(result.join(" "));
};

solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15'
    ]
);