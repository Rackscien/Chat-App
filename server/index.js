const express = require('express')
const cors= require("cors")
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes')
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);

 mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDb Connected Successfully !")
})
.catch((err)=>{console.log(err)})

const PORT = process.env.PORT || 500;

const server = app.listen(PORT,()=>{
    console.log(`App Listen at port ${PORT}`)
}) 

//,{
//     useNewUrlParser :true,
//     useUnifiedTopology:true,
// }