const express=require("express")
const router=express.Router()
router.post("",(req,res)=>{
    const { username } = req.body;
    if (username) {
        // Storing username in local storage (redirect is handled on client-side)
        res.send({ success: true, username });
    } else {
        res.status(400).send({ success: false, error: "Username is required." });
    }
    
    
})


module.exports=router