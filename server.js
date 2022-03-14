const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3030

const MONGODB_URI = 'mongodb+srv://Admin:admindb97@adminappdb.jl04y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


mongoose.connection.on('connected', () => {
    console.log('connected to db successfully');
})

app.use(morgan('tiny'))

app.listen(PORT, console.log(`server running on port ${PORT}`))