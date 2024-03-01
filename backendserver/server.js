const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv').config();
const cors=require('cors');
const UserRouter=require('./Route/UserRoute');
const app=express();

/* body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* cors */
app.use(cors());

/*Routers*/
app.use('/api',UserRouter);

/* mongoose */
const port=process.env.PORT;
const dbDriver=process.env.MONGO_URL;
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at http://localhost:${port}/api/register`);
    })
})
.catch(()=>{
    console.log('error!');
})