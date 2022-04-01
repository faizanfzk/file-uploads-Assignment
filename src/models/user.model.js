const mongoose=require("mongoose");

userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    profile_pic:{type:String,required:true}
});

const User=mongoose.model("user",userSchema)

module.exports=User