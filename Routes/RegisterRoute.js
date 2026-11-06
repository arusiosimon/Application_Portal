const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Yes am Simon is the RegistrationRoute API working?");
});
module.exports=router;