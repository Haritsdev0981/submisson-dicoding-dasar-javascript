console.log("Test Guys")

const endpoint = "https://cat-fact.herokuapp.com/facts"

fetch(endpoint)
    .then(result => result.json())
    .then(data => console.log(data))