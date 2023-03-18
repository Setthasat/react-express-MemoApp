const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Model = require('./model/form');
const Form = require('./controller/form');

const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());

try {
    const DBAddress = process.env.DB_URL || "localhost:8888";
    // set("strictQuery", true);
    mongoose.connect(DBAddress);
    console.log('database connected ...');
} catch (err) {
    console.log(err);
}

const FormInst = new Form(Model);
app.get('/api/todos', FormInst.getAllData);


app.listen(PORT, console.log(`app running at http://localhost:${PORT}`));
