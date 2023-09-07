const validate = (req,res,next)=>{

    
    
    
    if(req.params.age >=18){
        next();
    }else if(req.query.age >=18){
        next();
    }
    else{
        res.send("Not allowed")
    }


   
}

module.exports = validate