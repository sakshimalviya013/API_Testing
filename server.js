const express = require('express');
const mongoose = require('mongoose');

const Product =require('./modules/productModules');
const app = express();

// middleware to use json
app.use(express.json());
// middleware to use form url
app.use(express.urlencoded({extended: false}))


// route 
app.get('/', (req, res) => {
    res.send('hello node api');
})

app.get('/blog', (req, res) => {
    res.send('hello blog my name is Sakshi');                            
})
// get all product
app.get('/product', async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})

    }
})
// get single product
app.get('/product/:id', async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})

    }
})
// craete product
app.post('/product',async(req,res) =>{
try{
  const product = await Product.create(req.body)
  res.status(500).json(product);
}catch(error) {
    console.log(error.message)
    res.status(500).json({message: error.message})

}
})

// update
app.put('/product/:id', async(req,res) => {
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
          return res.status(404).json({message: 'cannot find product with Id ${id}'})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
       }catch(error){
        res.status(500).json({message: error.message})

    }
})
// delete product
app.delete('/product/:id', async(req,res) => {
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
          return res.status(404).json({message: 'cannot delete product with Id ${id}'})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(product);
       }catch(error){
        res.status(500).json({message: error.message})

    }
})
mongoose.
connect('mongodb+srv://admin:Number123@apidatabase.d44uqfz.mongodb.net/node_api?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => { 
        console.log("hello api is runnig on port 3000");
    })
 console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})                         