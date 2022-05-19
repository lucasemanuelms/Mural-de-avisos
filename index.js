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

app.post('/new', (req, res)=>{

})

app.listen(PORT, ()=>{
    console.log(`Server runnin on PORT ${PORT}.`)
})