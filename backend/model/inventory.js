const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    inventoryId: String,
    inventoryType : String,
    itemName : String,
    quantity : Number
})

const inventoryModel = mongoose.model("inventory" , inventorySchema)

module.exports = inventoryModel