const fetchCoffee = require('../components/FetchCoffee')

test('must fetch correct coffee blend name', () => {
    expect.assertions(1)
    return fetchCoffee()
        .then(data => {
         expect(data.title).toEqual('delectus aut autem')
        })
})