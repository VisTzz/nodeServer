require('dotenv').config()
const cors = require('cors');

const http = require("http");
const express = require("express");
const models = require('./models/models')
const PORT = process.env.PORT || 8080;
const router = require("./routes/index");
const app = express();
const errorHandler = require('./middleware/errorHandlingMiddleware')
const { sequelize } = require('./db');


const start = async () => {
    try {  
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=> console.log(`server running on ${PORT}`))
    } 
    catch(e) {
        console.log(e)
    }
};

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

start()