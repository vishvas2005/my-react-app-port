//AB ham yaha jo userschema banaya hai usse routes me daal ke agge work start karege messages ko bhejne ka 
//import some needed packages mentioned down
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const Message = require("./models/message")
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json()); 
express.urlencoded({ extended: true })

//connect karte h hamare mongo db server ko hamare project se
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log("connected to the server"))
.catch(err=>console.log("Mongodb error de rha h or bo error ye h " ,err))

//ab ham ek route create karege jisse ham data post kar sake hamare postman through

app.get('/', (req, res) => {
    res.send('backend is working');
  });
  
app.post('/contact' , async(req,res)=>{
    const { name , email , message } = req.body
    if(!name == !email == !message){
        return res.status(500).json({error:"all fields are required"})
    }
    try{
        const newMessage = new Message({name , email , message});
        await newMessage.save();
        res.status(200).json({ message: "Message sent successfully!" });
    }
    catch (err) {
        // 👉👉 Yahan lagana hai 👇👇
        console.error("❌ Error while saving message:", err);
    
        res.status(500).json({ error: "Server error" });
      }
})
//ab ham contact me anne bala data check karege 
//ab ham server chalayege bhrum bhurm 
app.listen(PORT , ()=>{
    console.log("server is running bhrum bhrum at given :${PORT}")
})