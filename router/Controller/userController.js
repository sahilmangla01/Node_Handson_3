const register = (req , res)=>{
    res.send("register complete")
}
const login = (req,res)=>{
    res.send("login complete")
}
const logout =(req , res)=>{
    res.send("logout complete")
}

module.exports = {register , login , logout}