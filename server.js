const express = require('express');
const app= express();

// route
app.get('/',(req, res)=>{
    res.send('hello node api');
})

app.listen(3000, () => {
    console.log("hello api is runnig on port 3000");
})