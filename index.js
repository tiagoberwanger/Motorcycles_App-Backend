const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const Controller = require('./src/controllers/controller');
const app = express()
const port = 3002

app.use(cors())

app.use('/motorcycles', Controller)

app.listen(port, () => console.log(`Running at ${port}`))