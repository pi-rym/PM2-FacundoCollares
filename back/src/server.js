const {router} = require("./routes/index")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
//? SERVER
//* armar y configurar el servidor


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(router)


module.exports = app
    
