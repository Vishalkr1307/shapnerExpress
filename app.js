const http=require("http");
const exress=require("express")
const Admin=require("./route/admin")
const Shop=require("./route/shop")
const Login=require("./route/login")
const Home=require("./route/home")
const Contact=require("./route/contact")
const bodyParser=require("body-parser")
const path=require("path")
const app=exress()
app.use(exress.static(path.join(__dirname,'public')))
app.use(exress.json())
app.use("/admin",Admin)
app.use("/",Shop)
app.use("/login",Login)
app.use(Home)
app.use("/contactus",Contact)


// app.use("/add-product",(re,res,next)=>{
     
//    return res.send('<form action="/product" method="POST"><input type="text" name="title"/> <input type="text" name="description"/> <button type="submit">addProduct</button></form>')
// })
// app.use("/product",(req,res,next)=>{
//     console.log(req.body)

//     return res.redirect("/")
// })

// app.use("/",(req,res)=>{
//     return res.send("<h1>hello wolrd lets add the product</h1>")
// })



// // app.use((req,res,next)=>{
// //     console.log("Starting Express")
// //     // return res.send("<h1>Hello world</h1>")
// //     next()

// // })
// // app.use((req,res,next)=>{
//     console.log("MIddle Express")
//     // return res.send("<h1>Hello world -2</h1>")
//     next()


// })
// app.use((req,res,next)=>{
//     console.log("End Express")
//     return res.send("<h1>Hello world -3</h1>")


// })

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




app.listen(5500,()=>{
    console.log(`Express listening on ${5500}`)
})