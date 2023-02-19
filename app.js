const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/pravinya",
mongoose.set('strictQuery', false),
()=>{
    console.log("Connected to database successfully...")
});