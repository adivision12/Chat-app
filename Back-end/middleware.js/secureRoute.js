const jwt = require('jsonwebtoken');
const User = require('../models/users');

module.exports.secureRoute=async(req,res,next)=>{
    try {
        // if(req.headers.authorization){
        // const token=req.headers.authorization.split(" ")[1];
        const token=req.cookies.jwt;
        if(token){
        // console.log("token=",token);
        // console.log(req.headers.authorization.split(" ")[1]);
        
        // if(!token){
        //    return  res.json({message:"not authorized"})
        // }
        const varified=jwt.verify(token,"mysecret");
        // console.log(varified);
        // if(!varified){
        //     return res.json({message:"not authorized"})
        // }
        const user=await User.findById(varified.id).select("-password");
        // if(!user){
        //     return res.json({message:"not found user"})
        
        console.log(user)
        req.user=user;
        }
        next();
    } catch (error) {
        console.log(error)
    }
}