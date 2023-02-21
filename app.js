const mongoose =require("mongoose");

// Connection creation to already existed db OR else create the new db
mongoose.connect("mongodb://localhost:27017/pravinya",{useUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Connection Successfull.."))
.catch((err)=>console.log(err)); 

// Schema making
const videoplayList=mongoose.Schema({
    name:String,
    type:Number,
    video:Number,
    active:Boolean
})