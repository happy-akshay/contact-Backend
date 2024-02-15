const express =require("express")
const app=express()
const ForUser=require('./TheRouter/ForUser')
const dotenv=require('dotenv')
dotenv.config()
const cors=require("cors")
app.use(express.json({limit:"50mb"}))
const connect=require("./Connection/Connection")
connect()
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.get("/",(req,res)=>{
res.send("<h1>Backend is running</h1>")
})
app.use(
    cors({
        credentials:true,
        origin:"http://localhost:3000"
    })
)
app.use("/api/user",ForUser)
app.listen(process.env.PORT,()=>{
    console.log(`Backend is runnign in ${process.env.PORT}`)
})