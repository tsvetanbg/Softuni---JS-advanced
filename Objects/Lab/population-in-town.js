/*
You have been tasked to create a register for different towns and their population.
Input
The input comes as array of strings. Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.
Output
As output, you must print all the towns, and their population.
*/

function solve(arr) {

    let towns = [];
    let populations = [];
    let result = {};

    arr.map(a => a
        .split(" <-> ")
        .map(b => isNaN(b) ? towns.push(b) : populations.push(Number(b)))
    );

    towns.forEach((town, i) => {

        let currentPopulation = populations[i];

        if (result[town]) {
            result[town] += currentPopulation;
        } else {
            result[town] = currentPopulation;
        }
    });

    for (const town in result) {
        console.log(`${town} : ${result[town]}`)
    }
}

solve(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'

    ]

);