
const product = require("./router/product");
const route = require("./router/user")
const express = require("express")
const app =  express();
const port = 3000;

const middleware = (req,res,next)=>{
    console.log("application level middleware is running")
    next();
}
app.use(middleware);
app.use("/user" , route)
app.use('/user' , product)

app.listen(port , ()=>{
    console.log(`server is live on port ${port}`)
})