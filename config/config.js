let config = require('./db');

// Database setup
const mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(config.DB);

    let mongodb = mongoose.connection;

    mongodb.on('error', 
        console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    })

    return mongodb;

}