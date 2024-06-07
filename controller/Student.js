const User=require('../models/User');
const Item=require('../models/Item');


exports.getItems=async(req,res)=>{
    try{

        const allItems=await Item.find({});
        res.status(200).json({
            success:true,
            message:'All Item Fetched Successfully',
            data:allItems
        })

    }catch (error) {
        // Handle any errors that may occur during the process)
        return res.status(500).json({
          success: false,
          message: "Error in fetching Items.",
          error: error.message,
        })
      }
}

exports.frontPageItems=async(req,res)=>{
    try{

        const allItems=await Item.find({}).limit(4);
        res.status(200).json({
            success:true,
            message:'All Item Fetched Successfully',
            data:allItems
        })

    }catch (error) {
        // Handle any errors that may occur during the process)
        return res.status(500).json({
          success: false,
          message: "Error in fetching Items.",
          error: error.message,
        })
      }
}

exports.getParticularItem=async(req,res)=>{
    try{
        console.log('hellow ')
        const id=req.params.id;
        console.log('id',id);
        const userItem=await Item.find({_id:id});
        console.log('userItem',userItem);
        return res.status(200).json({
            success:true,
            message:'Item fetched Successfully',
            data:userItem
        })

    }catch(error)
    {
        return res.status(500).json({
            success: false,
            message: "Error in fetching Items.",
            error: error.message,
          })
    }
}