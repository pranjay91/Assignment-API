const express = require("express")
const router  = express.Router()
const orderModel = require("../model/order")
const inventoryModel = require("../model/inventory")

router.post("/order" , (req , res)=>{
    inventoryModel.find({inventoryId:req.body.inventoryId}).then((data)=>{
        if(data.length){
            const available = data[0].quantity
            if(available > req.body.orderQuantity){
                orderModel.create({inventoryId:req.body.inventoryId , customerId:req.body.customerId , 
                    itemName:req.body.itemName ,orderQuantity:req.body.orderQuantity}).then(()=>{
                        const setQuantity = available - req.body.orderQuantity
                        inventoryModel.updateOne({inventoryId:req.body.inventoryId},{$set:{quantity:setQuantity}}).then(()=>{
                            res.status(200).send("Order Placed")
                        }).catch((err)=>{
                            res.status(400).send(err)
                    })
                })
            }else{
                res.status(400).send(" Out of Stock")
            }
        }
    })
})

router.get("/order" , (req,res)=>{
    orderModel.find().then((data)=>{
        res.status(200).send(data)
    })
})

module.exports = router