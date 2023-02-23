const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(("mongodb://localhost:27017/Rupeek"))
.then(()=>console.log("Connection Successfull..."))
.catch((err) => console.log(err));

const playlistSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist=new mongoose.model("Playlist",playlistSchema);

const createDocument=async()=>{
    try{
        const reactPlayList=new Playlist({
            name:"ReactJs",
            ctype:"Front end",
            videos:80,
            author:"Pravinya kumbhare",
            active:true,
        })
        const mongodbPlayList=new Playlist({
                name:"Mongodb",
                ctype:"Database",
                videos:110,
                author:"Pravinya kumbhare",
                active:true,
        })
        const mongoosePlayList=new Playlist({
                name:"Mongoose",
                ctype:"Database",
                videos:100,
                author:"Pravinya kumbhare",
                active:true,
        })
        const result=await Playlist.insertMany([reactPlayList,mongodbPlayList,mongoosePlayList]);
        console.log(result);
        console.log("This is beyond the imagination...");
    }
    catch(err){
        console.log(err);
    }
}
// const nodePlayList=new Playlist({
//     name:"NodeJs",
//     ctype:"Back end",
//     videos:100,
//     author:"Pravinya kumbhare",
//     active:true,
// })

createDocument();