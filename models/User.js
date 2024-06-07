const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Name:{
      type:String,
      required:true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  AccountType: {
    type:String,
    enum:['Restaurant','Manager','Delivery','User'],
    required:true,
  },
  phone_no:{
    type:Number,
    required:true,
  }
},{timestamps:true});


module.exports = mongoose.model('User', UserSchema);
