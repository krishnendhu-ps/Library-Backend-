const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const path=require('path');
require('dotenv').config();

mongoose.connect(process.env.DB_URI,{


})

const libraryRouter =  require("./routes/libraryr");
app.use('/api',libraryRouter);

app.use(cors());
app.use(express.static(path.join(__dirname,'public'))); 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','lib.html'));
});

const PORT=process.env.PORT||4002;
app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});

