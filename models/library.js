const mongoose=require("mongoose")

const libraryschema=new mongoose.Schema({
    Name:{type:String,required:true},
    Author:{type:String,required:true},
    Date:{type:Date,required:true},
    Remarks:{type:String,required:true}
})
module.exports=mongoose.model('Library',libraryschema);