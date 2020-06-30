const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(process.env.DATA_URL)

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
    console.log('Database connect!')
})
mongoose.Promise = global.Promise