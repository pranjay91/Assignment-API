const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    customerId :String,
    customerName : String,
    email : String
})

const customerModel = mongoose . model ("customer" , customerSchema)

module.exports = customerModel