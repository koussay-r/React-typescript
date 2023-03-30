const Pusher = require("pusher");
const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const taskmodel=require("./model/taskModel.js")
//server config
const app=express()
dotenv.config()
const port=process.env.PORT||9000
//midlewares
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true)
//db congfig
const mongourl=`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.yde1grw.mongodb.net/todoapp?retryWrites=true&w=majority`
mongoose.connect(mongourl,{
    useNewUrlParser:true
})
//endpoints
app.get("/",async(req,res)=>{
    res.send("works !")
})
//listening
app.listen(port,()=>{
    console.log(`server starting on port : ${port}`)
})