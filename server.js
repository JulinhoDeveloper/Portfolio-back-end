require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const { dbConnection } = require('./database/config');


const app = express();

// middleware 
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))

// Base de datos
dbConnection();

//rotas
app.use('/contato', require('./routes/contatoRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/projetoRoute'));
app.use('/', require('./routes/experienciaRoute'));
app.use('/', require('./routes/educacaoRoute'));
app.use('/', require('./routes/sobreRoute'));
app.use('/', require('./routes/upload'));




PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})

