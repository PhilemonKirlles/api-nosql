const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('./routes')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

mongoose.connect('mongodb://127.0.0.1/webapi_db', () => {
  console.log(`Connected to Mongoose: ${PORT}`);
  (err) => {
    console.log(`Error connecting to Mongoose Database: ${err}`);};
},


// mongoose.connect(
  {
   
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));

