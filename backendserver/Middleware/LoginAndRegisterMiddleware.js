
const user=require('../Model/UserModel');

/* SignUp Middleware */
const RegistrationMiddleware=async(req,res,next)=>{
      
        const alreadyRegistered=await user.findOne({$or:[{username:req.body.username},{email:req.body.email}]});
        if(!req.body.username||!req.body.email||!req.body.password){
          return res.status(400).json({
              status:400,
              message:"All fields are required!"
          })
        }else{
          if(alreadyRegistered){
              return res.status(403).json({
                  status:403,
                  message:"Email Address and User Name already exists!"
              })
            }else{
              next()
            }
        }
      }

/* Login Middleware */
const LoginMiddleware=(req,res,next)=>{
      if(!req.body.email||!req.body.password){
        return res.status(400).json({
          status:400,
          message:"All fields are required!"
      })
      }else{
        next()
      }
}

module.exports={
    RegistrationMiddleware,
    LoginMiddleware
}