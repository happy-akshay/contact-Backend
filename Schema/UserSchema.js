const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter your Username"],
        maxLength:[30,"Name cannot exceed 30 Chracter"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Your E-mail"],
        unique:true,
    },
    number:{
        type:Number,
        maxLength:[10,"THE Number Cannot exceed 10 Digit"],
        minLength:[10,"THE Number Can't less then 10 Digit"]
    }
})

const UserModel=mongoose.model("UserModel",UserSchema)
module.exports=UserModel