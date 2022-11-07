const express = require("express")
const router = express.Router()
const customerModel = require("../model/customer")

router.post("/user" , (req,res) =>{
    customerModel.find({email:req.body.email}).then((data)=>{
        if(data.length){
            res.send("User already exist")
        }else{
            customerModel.create({email:req.body.email , customerId:req.body.customerId , customerName:req.body.customerName}).then(()=>{
                res.status(200).send("user Created")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        }
    })
})

router.get("/user" , (req,res)=>{
    customerModel.find().then((data)=>{
        res.status(200).send(data)
    })
})

module.exports = router