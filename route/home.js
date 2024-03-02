const { isUtf8 } = require("buffer")
const express=require("express")
const fs=require("fs")
const router=express.Router()
var user=[]
router.post("/send-message", (req, res) => {
    const { username, message } = req.body;
    if (username && message) {
        // Writing username and message to file
        const data = `${username}: ${message}\n`;
        fs.appendFile("messages.txt", data, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).send("Internal Server Error");
            }
            console.log("Message written to file successfully.");
            res.send({ success: true });
        });
    } else {
        res.status(400).send({ success: false, error: "Username and message are required." });
    }
});
module.exports=router