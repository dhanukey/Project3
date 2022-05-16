const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    title: {type:String,required:" title is required",trim:true}, 
    excerpt: {type:String,required:"excerpt is required",trim:true},
    userId:{type:ObjectId, ref:'User',required:true,trim:true,unique:false},
    ISBN: {type: String,required:"ISBN is required",trim:true} ,
    category: {type:String,required:"category is required",trim:true},
     subcategory: [{type:String,trim:true, required:"sub category is required"}] ,
    reviews: {type:Number, default:0 },
     deletedAt:{type:Date,default:null},
      isDeleted: {type:Boolean, default: false}, 
      releasedAt:{type:Date,default:null},


}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 


