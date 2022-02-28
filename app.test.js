const allCap = require('./app')
// const allSort = require('./app')

test("should be capitalized and letters in alphabetical order", () => {
    const city = 'jerusalem'
    expect(allCap(city)).toMatch(/aeeJlmrsu/)
})