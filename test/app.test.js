const allCap = require('../components/app')

test("should be capitalized and letters in alphabetical order", () => {
    const city = 'jerusalem'
    expect(allCap(city)).toBe('aeeJlmrsu')
})