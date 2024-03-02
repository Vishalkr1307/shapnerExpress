const path=require("path")
const rootPath=require("..//util/path")

const getContact=(req,res)=>{
    res.sendFile(path.join(rootPath,'views','contact.html'));

}
const postController=(req,res)=>{
    res.send("<h1>form successfully registered<h1>");
}
module.exports={getContact,postController}