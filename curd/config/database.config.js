const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/demodatabase").then(()=>{
    console.log('conection successfully established');
}).catch((err)=>{
    console.log('Could not connect to the database.' + err);
    process.exit()
})