console.log("Test Guys")

const endpoint = "https://cat-fact.herokuapp.com/facts"
// const endpoint = "https://regres.in/api/users"

fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        text: "kurakurakura"
    }),
})
    .then((result) => result.json())
    .then((data) => console.log(data)) 

// async function hitAPI(){
//     const api = await fetch(endpoint)
//     const data = await api.json()
//     console.log(data)
// }

// hitAPI()