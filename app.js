var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
const app = express();
const port = 8900;
const MongoClient = mongo.MongoClient;
let db;
const mongoUrl = 'mongodb://127.0.0.1/27017';
const db_name = 'primedb';
const col_name = 'movies';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/movies', (req, res) => {
    db.collection(col_name).find().toArray((err, result) =>{
        if(err) throw err;
        res.status(200).send(result);
    })
})

app.post('/addMovies', (req, res) => {
    db.collection(col_name).insertOne(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send('Data Inserted');
    })
})

app.get('/', (req, res) => {
    res.send("Hii From Express")
})

// connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('primedb');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})