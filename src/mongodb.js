const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/faiz")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String, 
        required:true
    }
})


const collection= new mongoose.model("data2",LogInSchema)

module.exports=collection