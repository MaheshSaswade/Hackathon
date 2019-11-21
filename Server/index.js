const express = require('express')
//const cors = require("cors");
const bodyParser = require('body-parser')
require('./db/mongoose')
const empRouter = require('./routers/employee')
const skillRouter = require('./routers/skills')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
//app.use(cors())
app.use(empRouter)
app.use(skillRouter)

app.listen(port, () => {
    console.log('Server running on ' + port)
})