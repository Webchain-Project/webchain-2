const express = require('express')
const app = express()




const createballot = [{createballot: 'createballot'}]


app.get('/createballot', (req,res) => {       //We need the user to get the ballot for the algorithm to work.
    res.json('createballot')
})     



app.listen(3000)