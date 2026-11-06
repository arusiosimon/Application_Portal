const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Yes am Simon is the styleRoute API  working?");
});
module.exports=router;