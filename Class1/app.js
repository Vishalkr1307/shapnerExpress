const http=require("http");
const exress=require("express")
const app=exress()

app.use((req,res,next)=>{
    console.log("Starting Express")
    // return res.send("<h1>Hello world</h1>")
    next()

})
app.use((req,res,next)=>{
    console.log("MIddle Express")
    // return res.send("<h1>Hello world -2</h1>")
    next()


})
app.use((req,res,next)=>{
    console.log("End Express")
    return res.send("<h1>Hello world -3</h1>")


})




app.listen(3000,()=>{
    console.log(`Express listening on ${3000}`)
})