const express = require("express")
const router = express.Router()
const inventoryModel = require("../model/inventory")

router.post("/items" , (req,res)=>{
    inventoryModel.find({inventoryId:req.body.inventoryId}).then((data)=>{
        if(data.length){
            const Quantity = data[0].quantity + req.body.quantity
            inventoryModel.updateOne({inventoryId:req.body.inventoryId},{$set:{quantity:Quantity}}).then(()=>{
                res.status(200).send("Updated Successfully")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        }else{
            inventoryModel.create({inventoryId:req.body.inventoryId , inventoryType:req.body.inventoryType , 
                itemName:req.body.itemName , quantity:req.body.quantity}).then(()=>{
                    res.status(200).send("Item Added")
                }).catch((err)=>{
                    res.status(400).send(err)
                })
        }
    })
})

router.get("/items" , (req,res)=>{
    inventoryModel.find().then((data)=>{
        res.status(200).send(data)
    })
})

module.exports = router