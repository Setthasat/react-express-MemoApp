const mongoose = require('mongoose');

const FormsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    isComplete: {
        type: Boolean,
        require: false
    }
});

const FormsModel = mongoose.model("forms", FormsSchema);

module.exports = FormsModel;