import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        userName :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
        },
        fullName :{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            index:true
        },
        avatar :{
            type:String, //cloudinary url
            required:true,
        },
        coverImage :{
            type:String, 
            
        },
        watchHistory :{
            type: Schema.Types.ObjectId,
            ref : "Video"
        },
        password :{
            type:String,
            required:[ true,'password is required']
        },
        refreshToken :{
            type:String, 
           
        },
        
    },{
        timestamps:true
    }
)

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.method.generateAccessToken= function(){
  return  jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName
    },
process.env.ACCESS_TOKEN_SECRET,
{
    expriresIn:process.env.ACCESS_TOKEN_EXPIRY
}
)
}

// refresh token 
userSchema.method.generateRefreshToken= function(){
  return  jwt.sign({
        _id:this._id,
     
    },
process.env.REFRESH_TOKEN_SECRET,
{
    expriresIn:process.env.REFRESH_TOKEN_EXPIRY
}
)
}
userSchema.method.generateRefreshToken= function(){}
export const User =mongoose.model("User",userSchema)

