const express = require('express')
const app = express();
const cookie = require('cookie-parser')

app.use(express.json())
app.use(cookie())

// Require All The Routes Here
const authRouter = require('./routes/auth.routes')

// User all  the Routes Here
app.use("/api/auth", authRouter)



module.exports = app