const mongoose = require('mongoose')

const FormsSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true,
    },
    description : {
        type: String,
        require: true
    },
    date : {
        type: String,
        require: true
    },
});

const FormsModel = mongoose.model("forms", FormsSchema)

module.exports = FormsModel;