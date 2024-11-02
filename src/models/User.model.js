import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new Schema({

    username:{
        type:String,
        required:[true,"userName is required"],
        unique:true,
        index:true,
        lowercase:true,
        trim:true

    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:[true,"userName is required"],
        index:true,
        lowercase:true,
    },
    avatar:{
        type:String,//cloudinary Url
        required:true,  
    },
    coverImage:{
        type:String,//cloudinary Url
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    required:[true,"password is required"],
    unique:true,

},
refreshToken:{
    type:String
}

},{timestamps:true})

userSchema.pre("save", async function(next){
    //this code just executed before ths data save in database///
    //we can put this value in if condition like this and also change it
    //we say that if password is not modified then simply return and call next() function
    //or other hand modified the password and call next() function
    if(!this.isModified("password"))return next()
this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
//bcrypt can hash password and also check password to compare
//because it  take time we used async method
    return  await bcrypt.compare(password,this.password)
}

//JWT//
//you do not make it async because it is fast so does not wait
userSchema.methods.generateAccessToken =function(){
  return  jwt.sign(
        {
        _id:this_id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
   process.env.ACCESS_TOKEN_SECRET,
   {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
   }
)
}
userSchema.methods.generateRefreshToken = function(){
    return  jwt.sign(
        {
        _id:this_id,
      
    },
   process.env.REFRESH_TOKEN_SECRET,
   {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
   }
)


}
export const User = mongoose.model("User",userSchema)


//Important note //
//JWT ek bearded token hai.
//this q asked in interviews
//  that is JWT?
//JWT ek bearded token hai.