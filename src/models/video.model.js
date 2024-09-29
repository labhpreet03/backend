import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
          videoFile:{
            type:String,
            required:true
          },
          thumbnail:{
            type:String,
            required:true
          },
          owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
            
          },
          title:{
            type:String,
            required:true
          },
          description:{
            type:String,
          },
          duration:{
            type:Number,
          },
          views:{
            type:Number,
            default:0
          },
          isPublished:{
            type:Boolean,
            default:true
          },
          duration:{
            type:String,
          },
         
    },{
        timestamps:true
    }
)


export const Video = mongoose.model("Video",videoSchema)