const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mogodb://localhost:27017/login-app-db')
const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json())

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    res.json({status: "ok" })
})

app.listen(4000, () => {
    console.log('Server up at 4000')
})