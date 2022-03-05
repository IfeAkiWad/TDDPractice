const squareSum = require('../SquareSum')

test('squares each number passed into it and then sums the results together', () => {
    const numbers = [1,3,4]
    expect(squareSum(numbers)).toEqual(27)
})