const axios = require('axios')

const fetchCoffee = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => console.log(response.data))
        //  .catch(error)
}

module.exports = fetchCoffee