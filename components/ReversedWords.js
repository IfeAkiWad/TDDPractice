/* Complete the solution so that it reverses all of the words within the string passed in.*/

const reverseWords = (str) => {
    return str.split('')
              .reverse()
              .join('')
              .split(' ')
              .reverse()
              .join(' ')
   
}

module.exports = reverseWords