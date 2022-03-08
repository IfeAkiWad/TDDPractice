const reverseWords = require('../components/ReversedWords')

test('reverse all of the words within the string', () => {
    const str = 'Please reverse this sentence'
    expect(reverseWords(str)).toBe('esaelP esrever siht ecnetnes')
})