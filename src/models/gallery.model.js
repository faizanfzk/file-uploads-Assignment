const mongoose=require("mongoose");

const gallerySchema=new mongoose.Schema({
    userPictures:[{type:String,required:true}],
    userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"user",
   required:true
    }
})

const Gallery=mongoose.model("gallery",gallerySchema)

module.exports=Gallery