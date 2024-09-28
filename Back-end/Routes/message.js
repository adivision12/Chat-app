const express=require("express");
const { sendMsg, getMsg, getMsgUser } = require("../Controller/message");
const { secureRoute } = require("../middleware.js/secureRoute");
const { secureRouteMsg } = require("../middleware.js/secureRouteMsg");
const router=express.Router();


router.post("/send/:id",secureRouteMsg ,sendMsg);
router.get("/:id",secureRouteMsg ,getMsg);


module.exports=router;