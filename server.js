const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("I am a NODE.JS Server :) !!");
})

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("Wassupp!!!")
});