const express=require('express');
const route=express.Router();
const UserController=require('../Controller/UserController');
const LoginAndRegisterMiddleware=require('../Middleware/LoginAndRegisterMiddleware');
const Verify=require('../Middleware/Verification');
/* Registration */
route.post('/register',LoginAndRegisterMiddleware.RegistrationMiddleware,UserController.UserSignUp);

/*Login*/
route.post('/login',LoginAndRegisterMiddleware.LoginMiddleware,UserController.UserLogin);

/*Profile*/
route.get('/profile',Verify.Verification,UserController.UserProfile);

/*Admin Panel*/
route.get('/adminpanel',Verify.Verification,UserController.AdminPanel);

module.exports=route;