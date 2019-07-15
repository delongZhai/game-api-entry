const express = require('express');
const app = express();
const mongoose = require('mongoose');
const games = require('./routes/game');

app.use('/api', games);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const db = 'mongodb://localhost:27017/mongoGames';
mongoose.connect(db, err =>  {
    if(err){

        console.log('Error!' + err);
    }
    else{
        console.log('Connected to mongodb');
    }
});

// Default route
app.use('/', games);

const port = process.env.PORT || 7000;
app.listen(port, ()=> console.log("Listening on port " + port));