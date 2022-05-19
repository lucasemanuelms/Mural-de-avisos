const PORT = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen(PORT, ()=>{
    console.log(`Server runnin on PORT ${PORT}.`)
})