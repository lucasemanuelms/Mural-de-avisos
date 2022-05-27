const PORT = 3000
const express = require('express')
const app = express()

const path = require("path")
const apiRoute = require("./routes/api")


/*Para garantir que uma chamada a api não busque por uma pasta chamada api, devemos usar na ordem abaixo*/
app.use('/api', apiRoute)
app.use('/', express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>{
    console.log(`Server runnin on PORT ${PORT}.`)
})