const UserModel=require("../Schema/UserSchema")

exports.FileCreate=async(req,res)=>{
try {
    const {name,email,phone}=req.body
    let user=await UserModel.findOne({username:name})
    user=await UserModel.create({
        username:name,email,number:phone
    })
    res.status(200).json({
        success:true,
        message:"completed",
        user
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Catch wala error hai"
    })
}
}

exports.GetFile=async(req,res)=>{
    try {
        let user=await UserModel.find()
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"catch error from getfile"
        })
    }
}

exports.FileUpdated=async(req,res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id.replace(':', ''); // Remove the colon

        const user = await UserModel.findById(id);
        let {name,email,phone}=req.body
        if(name){
            user.username=name
        }
        if(email){
            user.email=email
        }
        if(phone){
            user.number=phone
        }
        await user.save()
        res.status(200).json({
            success:true,
            message:"Updated"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            messsage:"error in updated side"
        })
    }
}

exports.FileDeleted=async(req,res)=>{
try {
    console.log(req.params.id)
    const id = req.params.id.replace(':', ''); // Remove the colon
    console.log(id);
const user=await UserModel.findById(id)
await user.deleteOne()
res.status(200).json({
    success:true,
    message:"Updated"
})
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"error in filedeleted"
    })
}
}
