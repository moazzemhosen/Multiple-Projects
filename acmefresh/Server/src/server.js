const app=require("./index");
const connect=require("./configs/db");
const dotenv= require("dotenv")
dotenv.config();


//This server is Listing this port 8080 and password mention here
// PORT=8080
// MONGOPASSWORD=subho0905


const port =process.env.PORT


app.listen(port,async()=>{
    try{
      await  connect();
     return console.log(`Port is connected on ${port}`)
    }catch(err){
    return console.log(err)
    }
})