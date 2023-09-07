const route = require("express").Router();

const validate = require("../middleware/middleware");
const {register , login , logout} = require("./Controller/userController")

route.get('/api/login/:age',validate,login)

route.get('/api/signup',validate,register)

route.get('/api/logout',logout)
module.exports = route