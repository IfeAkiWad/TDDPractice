// Nondestructively capitalize the first letter of the city's name.
// Nondestructively sort the letters in the city's name.

const allCap = (city) => {
    let capCity = city.slice()
    let sortCity = capCity[0].toUpperCase() + capCity.slice(1)
    return sortCity.split('').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')
  
}

module.exports = allCap