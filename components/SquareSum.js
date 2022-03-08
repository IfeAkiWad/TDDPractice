/*Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

const squareSum = (numbers) => {
    let total = 1;

    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i] * numbers[i] 
    }

    return total;
}

module.exports = squareSum