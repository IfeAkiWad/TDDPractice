const fetchCoffee = require('../components/FetchCoffee')

test('must fetch correct coffee blend name', () => {
    expect.assertions(1)
    return fetchCoffee()
        .then(data => {
         expect(data.blend_name).toBe('Joe Look')
        })
})