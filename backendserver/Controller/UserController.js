const users=require('../Model/UserModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


/* Sign-up functionality */
const UserSignUp=(req,res)=>{
    try{
       const User=new users({
             username:req.body.username,
             email:req.body.email,
             password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(12))
       });
       User.save().then((NewUser)=>{
        return res.status(201).json({
            status:201,
            message:'Registration is successful!',
            NewUser
        })
       })
       
    }catch(error){
          console.log(error);
          return res.status(400).json({
            status:400,
            message:'Error!'
          })
    }
}

/*Login functionality*/
const UserLogin=async(req,res)=>{
    try{
       const Data=await users.findOne({email:req.body.email});
       if(Data){
         if(bcrypt.compareSync(req.body.password,Data.password)){
            
                const Token=jwt.sign({_id:Data._id},
                                 process.env.SECRET,{expiresIn:'1h'});
                return res.status(200).json({
                    status:200,
                    message:'Login is Successful!',
                    Token,
                    Role:Data.role,
                    name:Data.username
                })
            
         }else{
            return res.status(401).json({
                   status:401,
                   message:"Password is Wrong!" 
            })
         }
       }else{
        return res.status(404).json({
            status:404,
            message:'Not Found!',
        })
       }
    }catch(error){
        console.log(error);
    }
}

/*Profile functionality:*/
const UserProfile=async(req,res)=>{
    try{
       const UserDetails=await users.findById(req.individual._id)
      if(UserDetails){
        if(UserDetails.role==="user"){
            console.log(UserDetails.role);
            return res.status(200).json({
                status:200,
                message:"Here are the User Details!",
                UserDetails
               })
           }else{
            
            return res.status(400).json({
                status:400,
                message:"Individual is not a user!",
            })
           }
      }
    }catch(error){
        console.log(error);
    } 
}

/*Admin Panel:*/
const AdminPanel=async(req,res)=>{
    const AdminPanel=await users.find({role:"user"},{username:1,email:1});
    const UserDetails=await users.findById(req.individual._id);
    if(UserDetails){
        if(UserDetails.role==="admin"){
            return res.status(200).json({
                status:200,
                message:"Here is the Admin Panel!",
                AdminPanel
            })
        }else{
            return res.status(400).json({
                status:400,
                message:"Individual is not Admin!",
                
            })
        }
    }
    
}


module.exports={
       UserSignUp,
       UserLogin,
       UserProfile,
       AdminPanel
}
