const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/soccerRoute');

// Mongo Connection

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/mypay");


// Body Parser 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Cors 

app.use(cors());


routes(app);




app.get("/", (req, res) => {
    res.send("Home")
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});