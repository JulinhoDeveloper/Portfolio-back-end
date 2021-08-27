require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

// middleware 
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))

app.get('/', (req,res)=>{
    res.send('oioi');
})


PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})

