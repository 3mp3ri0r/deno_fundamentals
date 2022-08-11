const response = 
await fetch(new URL("./users.json", import.meta.url))
const users = await 
response.json()

console.log(users)
