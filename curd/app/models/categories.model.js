const mongoose = require('mongoose');
const categoryScheema = mongoose.Schema(
    {
        name:String,
        phone_number:Number,
        person_details:String

    }
);

module.exports = mongoose.model('category',categoryScheema);