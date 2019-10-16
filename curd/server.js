const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.json({"message":'Hey welcom'});
});
require('./app/routing/category.routing.js')(app);
app.listen(8080,()=>{
    console.log('server is started !')
})