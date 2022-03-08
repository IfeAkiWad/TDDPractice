const fetchCoffee = () => {
    axios.get('https://random-data-api.com/api/coffee/random_coffee')
         .then(response => response.data)
         .catch(error => 'error fetching!')
}

module.exports = fetchCoffee