const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

const SERVER_PORT = process.env.PORT || 3000


app.get("/", (request, response) => {

    response.send("<h1> Welcome to the root of the server - using GET method </h1>")

})



// Q1
app.get("/hello", (request, response) => {

    response.type("text/plain").send("Hello Express JS")

})



// Q2
app.get("/user", (request, response) => {

    const firstname = request.query.firstname || "Pritesh"
    const lastname = request.query.lastname || "Patel"

    response.json({
        firstname: firstname,
        lastname: lastname
    })

})



// Q3
app.post("/user/:firstname/:lastname", (request, response) => {

    const firstname = request.params.firstname
    const lastname = request.params.lastname

    response.json({
        firstname: firstname,
        lastname: lastname
    })

})



// Q4
app.post("/users", (request, response) => {

    const users = Array.isArray(request.body) ? request.body : []

    response.json(users)

})



// Q5
app.get("/instruction.html", (request, response) => {

    response.sendFile("instruction.html", { root: "./public" })

})




app.listen(SERVER_PORT, () => {

    console.log("Server is running on http://localhost:" + SERVER_PORT)

})