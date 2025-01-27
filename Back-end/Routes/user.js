const express=require("express");
const {signUp,login, logout, getUsers, getSearchUsers, getMsgUser, update}=require("../Controller/users.js");
const { secureRoute } = require("../middleware.js/secureRoute.js");
const { secureRouteMsg } = require("../middleware.js/secureRouteMsg.js");
// const passport  = require("passport");

const router=express.Router();

router.post("/signUp",signUp);
router.put("/update",update);

router.post("/login",login);
router.post("/logout",logout);
router.get("/getUsers",getUsers);
router.get("/new/:id", getMsgUser);

router.get("/search",secureRouteMsg,getSearchUsers);

module.exports=router;
// passport.authenticate("local",{failureRedirect:'/user/login'})