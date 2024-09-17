var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/firstServer/', (req,res) => {
    res.send("Hi There! This is my first route built using express framework");
})

app.get('/firstUser/:id/', (req,res) => {
    res.send(`Hi there, your user ID is ${req.params.id}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});