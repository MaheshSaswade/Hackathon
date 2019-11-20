const express = require('express')
require('./db/mongoose')

const cors = require("cors");
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(cors())

const userRouter = require('./routers/user')

app.use(userRouter)

app.listen(port, () => {
    console.log('Server up on ' + port)
})

 const main = async () => {
 }


main()
