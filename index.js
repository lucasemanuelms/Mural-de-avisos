const PORT = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const posts = require('./model/posts')
const path = require("path")

app.use('/', express.static(path.join(__dirname, "public")))

app.get('/all', (req, res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

app.post('/new', bodyParser.json(), (req, res)=>{
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post adicionado!")

})

app.listen(PORT, ()=>{
    console.log(`Server runnin on PORT ${PORT}.`)
})