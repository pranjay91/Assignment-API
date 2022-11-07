const express = require("express")
const mongoose = require("mongoose")
const app = express()
const customerController = require("./routes/customer")
const inventoryController = require("./routes/inventory")
const orderController = require("./routes/order")

app.listen(3007,(err)=>{
    if(!err){
        console.log("Server started at port 3007")
    }else{
        console.log(err)
    }
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://localhost/api_web_tech",()=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("api web tech")
})


app.use("/customer" , customerController)
app.use("/inventory" , inventoryController)
app.use("/order" , orderController)