const mongoose=require('mongoose')
const connect=async(req,res)=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(conn.connection.host)
    } catch (error) {
        console.log(`connection ki taraf ${error.message}`)
        process.exit()
    }
}
module.exports=connect