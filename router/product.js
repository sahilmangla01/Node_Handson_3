const product =require("express").Router();

product.get("/api/product", (req, res)=>{
    res.send("This is our all product page")
})

product.get("/api/product/:age",(req,res)=>{
    const age = req.params.age;
    if(age >=18){
        return res.send("user is allowed")
    }
    res.send("user is not allowed")
})

product.get('/api/createProduct',(req,res)=>{
    if(req.query.age >=18){
        return res.send("user is allowed")
    }
    res.send("user is not allowed")
})


module.exports = product