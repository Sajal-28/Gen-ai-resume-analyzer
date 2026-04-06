const express = require('express')
const cookie = require('cookie-parser')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookie())

// Require All The Routes Here
const authRouter = require('./routes/auth.routes')
const interviewRouter = require('./routes/interview.routes')

// User all  the Routes Here
app.use("/api/auth", authRouter)
app.use('/api/interview', interviewRouter)


module.exports = app