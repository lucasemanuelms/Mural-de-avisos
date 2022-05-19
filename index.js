const PORT = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let posts = [
    {   id:'lsdkmflksd',
        title:'Teste do Mural',
        description:'Aqui vai ter o conteúdo do mural'}
]

app.get('/all', (req, res)=>{
    res.json(JSON.stringify(posts))
})

app.post('/new', bodyParser.json(), (req, res)=>{
    let id = generateId()
    let title = req.body.title
    let description = req.body.description

    posts.push({id, title,description})

    res.send("Post adicionado!")

})

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}

app.listen(PORT, ()=>{
    console.log(`Server runnin on PORT ${PORT}.`)
})