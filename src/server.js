require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const cors = require("cors")
const app = express()

app.use(cors())
const port = process.env.PORT// hard code
const hostname = process.env.HOST_NAME
const connection = require('./config/database')

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template view
configViewEngine(app);

// khai bao route
app.use('', webRoute)



//khai báo route
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})