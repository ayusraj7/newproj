const mongoose = require('mongoose');
const User=require('../models/User')

const ItemSchema = new mongoose.Schema({
  img:{
      type:String,
      required:true,
  },
  name: {
    type: String,
    required: true,
  },
  description:{
      type:String,
      required:true,
  },
  price:{
      type:Number,
      required:true,
  },
  creator:{
      required:true,
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
  }
},{timestamps:true});

module.exports = mongoose.model('Item', ItemSchema);
