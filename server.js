const express = require('express');
const app = express();
const database = require('./database')

let myCache = {}

app.get('/no-cache/index.html',(req,res)=>{
    database.get('index.html',page =>{
        res.send(page)
    })
});

app.get('/with-cache',(req,res)=>{
     if('index.html' in myCache){
        console.log("Cache Present , Serving from Cache")
        res.send(myCache['index.html'])
        return
     }
     database.get('index.html',page => {
        console.log("Serving from Source")
        myCache['index.html'] = page;
        res.send(page)
     })
})



app.listen(3000,(req,res)=>{
    console.log(`Server is Listening`);
})