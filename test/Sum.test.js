const sumItUp = require('../Sum')

test('sum of the integers in the array', () => {
    const numbers = [1, 2, 3, 4]
    expect(sumItUp(numbers)).toEqual(10)
})