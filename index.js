const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes/route');
const bodyParser = require('body-parser');
const morgan=require('morgan');
const app = express();
const server = http.createServer(app);
const {job}=require('./utils/EthereumPriceUpdater');
// app.use(fileupload());
app.use(morgan('tiny'));
app.use([
    express.static("public"),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
     routes,
]);

const db=mongoose.connect("mongodb://localhost:27017/Koinx", {useNewUrlParser: true, useUnifiedTopology: true});
job.start();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Hello from express");
})

server.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}!`);
});