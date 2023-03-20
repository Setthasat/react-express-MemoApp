const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Model = require('./model/form');
const Form = require('./controller/form');

const PORT = process.env.PORT || 8888;

dotenv.config();
app.use(cors());
app.use(express.json());

try {

    // set("strictQuery", true);
    mongoose.connect(process.env.DB_URL);
    console.log('database connected ...');
} catch (err) {
    console.log(err);
}

const FormInst = new Form(Model);

//get all forms
app.get('/api/Forms', FormInst.getAllData);
// get form by id
app.get('/api/Forms/:id', FormInst.findFormByID);
// create form
app.post('/api/create/form', FormInst.createForm);
// delete form by id
app.delete('/api/delete/:id', FormInst.deleteData);

//patch complete, modify forms



app.listen(PORT, console.log(`app running at http://localhost:${PORT}`));
