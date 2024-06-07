const express = require('express');
const router = express.Router();

const {auth,isAdmin}=require('../middleware/authorization')
const {createItem,uploadPhoto, AdminItems}=require('../controller/Admin');
//user get the items

// router.post('/createItem',auth,isAdmin,createItem);
// router.post('/uploadPhoto',auth,isAdmin,uploadPhoto);
router.get('/admin-posts/:id?',AdminItems)


module.exports=router;