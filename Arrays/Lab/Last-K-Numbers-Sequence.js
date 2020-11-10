/*
You are given two integers n and k. Write a JS function that generates and prints the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
*/

function solve(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {

        let newNumber = result
            .slice(result.length < k ? 0 :result.length - k)
            .reduce((acc, a) => acc + a);

        result.push(newNumber);
    };

    console.log(result.join(' '));
}

solve(8, 2)