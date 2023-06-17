const express = require('express');
const mongoose = require('mongoose');

const app = express();

// route
app.get('/', (req, res) => {
    res.send('hello node api');
})

app.get('/blog', (req, res) => {
    res.send('hello blog my name is Sakshi                                                                                                                                                                                                                                                          ');
})

app.listen(3000, () => { 
    console.log("hello api is runnig on port 3000");
})

mongoose.
connect('mongodb+srv://admin:Number123@apidatabase.d44uqfz.mongodb.net/node_api?retryWrites=true&w=majority')
.then(() => {
 console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})                         