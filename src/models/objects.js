const mongoose=require('mongoose');
const Schema = mongoose.Schema();

const ObjectSchema =new Schema({

category: String,
name: String,
price: Number,
cover: String
});
module.exports = mongoose.model('Object', ProductSchema);
