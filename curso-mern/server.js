const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/curso-mern',
    function (err) {
        if(err){
            console.log(err)
        }else{
            console.log('Mongo DB CONECTADO com sucesso!')
        }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function ( req, res ) {
    res.json( { message:'Hello World com MongoDB!!!' } )
});

app.listen( port, function () {
    console.log(`Server runing on port ${port}`)
});

