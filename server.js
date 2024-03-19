// const mongoose=require('mongoose');
// const express=require('express');
// require('dotenv').config();

// const port=process.env.PORT || 3008;

// const app=express();
// mongoose.connect(process.env.MONGODB_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })

// .then(()=>console.log('Connectedto MongoDB'))
// .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//     process.exit(1); 
// });

// app.get('/',(req,res)=>{
//     res.json({
//         message:'Welcome to the HomePage',
//         database:mongoose.connection.readyState===1?'connected':'disconnected'
//     });
// });

// app.listen(port,()=>{
//     console.log(`🚀 Server is running on port: ${port}`);
// });


// module.exports = app;


const express = require("express");
const connectDB = require("./config/db.js");
const { filmRoute } = require('./routes.js');
connectDB();

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("pong");
});


//routes
app.use("/api", filmRoute);

app.listen(port, () => {
    console.log("Server is running on port");
});