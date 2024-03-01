const mongoose=require('mongoose');

const schema=mongoose.Schema;

const userSchema=new schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{
    timestamps:true
});

const userModel=mongoose.model('user',userSchema);
module.exports=userModel