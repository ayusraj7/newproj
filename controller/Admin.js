const User=require('../models/User');
const Item=require('../models/Item');


exports.uploadPhoto=async(req,res)=>{
    try{
        
        const file = req.files.image;
        
        //create a successful response
        
        if(!ans)
        {
            return res.status(400).json({
                success:false,
                message:'Cloudinary upload failed'
            })
        }
        
        return res.status(200).json({
            success:true,
            message:'photo successfully uploaded',
            url:ans.secure_url
        })
    }catch(error)
    {
        console.log('error',error);
        return res.status(500).json({
            success:false,
            message:'Failed in Uploading photo'
        })
    }
}

exports.createItem=async(req,res)=>{
    try{
        const{img,name,description,price}=req.body;
        const id=req.user.id;
        console.log('id',id);
        const newItem=await Item.create({
            img,
            name,
            description,
            price,
            creator:id
        })

        return res.status(200).json({
            success:true,
            message:'Item Created Successfully',
            data:newItem
        })

    }catch (error) {
        // Handle any errors that may occur during the process)
        return res.status(500).json({
          success: false,
          message: "Error in Creating Items.",
          error: error.message,
        })
      }
}

exports.AdminItems=async(req,res)=>{
    try{
       
        const user_id=req.params.id;
        const user=await Item.find({creator:user_id}).exec();

        return res.status(200).json({
            success:true,
            message:'Item Created Successfully',
            data:user
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