const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch('${path}/${country}', headers)
    .then((response) => responde.json())
}

export default {
    getCountry
}