const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
require('./db/mongoose')
const empRouter = require('./routers/employee')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors({ origin: 'http//localhost:4200' }));
app.use(empRouter)

app.listen(port, () => {
    console.log('Server running on ' + port)
})

