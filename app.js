const cors = require('cors');

const http = require("http");
const express = require("express");
const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user");
const app = express();


app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, ()=> console.log('server running'))