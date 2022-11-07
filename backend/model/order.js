const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    inventoryId: String,
    customerId :String,
    itemName : String,
    orderQuantity  : Number
})

const orderModel = mongoose.model("order" , orderSchema)

module.exports = orderModel