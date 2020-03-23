const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const path = require('path')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const api = require('./routes/api')

const MONGODB_URI = 'mongodb+srv://marito:UKhs7rxPfYLZup7J@toohak-lfq5e.mongodb.net/test?retryWrites=true&w=majority'

/** Database connection **/
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successful mongodb connection')
}).catch((error) => {
  console.log('Error at mongodb connection')
  console.log(JSON.stringify(error))
})

/** Settings **/
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

/** Middleware **/
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

/** Routes **/
app.use('/', index)
app.use('/api/', api)

app.listen(app.get('port'), () => {
  console.log("Running")
})