const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://talles-teste:talles123@cluster0-6ue9w.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority')

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
    console.log('Database connect!')
})
mongoose.Promise = global.Promise