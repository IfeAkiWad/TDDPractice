// Find the sum of the integers in the array


const sumItUp = (numbers) => {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
  }

  return sum
}

module.exports = sumItUp