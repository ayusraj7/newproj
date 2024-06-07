const express = require('express');
const router = express.Router();
const {login,signup}=require('../controller/Auth')
//user get the items.

router.post('/login',login);
router.post('/signup',signup);

module.exports=router;