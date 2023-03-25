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

// get all forms (http://localhost:8888/api/Forms)
app.get('/api/Forms', FormInst.getAllData);
// get form by id (http://localhost:8888/api/Forms/:id)
app.get('/api/Forms/:id', FormInst.findFormByID);
// create form (http://localhost:8888/api/create/form)
app.post('/api/create/form', FormInst.createForm);
// delete form by id (http://localhost:8888/api/delete/:id)
app.delete('/api/delete/:id', FormInst.deleteData);
// patch complete (http://localhost:8888/api/update/isComplete)
app.patch('/api/update/isComplete', setIsComplete);
// modify forms ()


app.listen(PORT, console.log(`app running at http://localhost:${PORT}`));
