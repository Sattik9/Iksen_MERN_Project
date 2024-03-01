const jwt=require('jsonwebtoken');

/*Authentication */
const Verification=(req,res,next)=>{
      const token=req.body.token||req.query.token||req.headers['authorization'];
      if(!token){
        return res.status(400).json({
               status:400,
               message:'Token is required!'
        })
      }else{
        try{
           const individual=jwt.verify(token,process.env.SECRET);
           req.individual=individual;
           console.log(req.individual);
           next()
        }catch(error){
            console.log(error);
        }
      }
}

module.exports={
    Verification
}
