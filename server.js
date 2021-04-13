const path = require("path");
const http = require('http');
const express = require('express');
// const {makeStock} = require('./stock');
const bodyParser = require("body-parser");
const app = express();
// async function loadStock(){
//     let stock = await makeStock();
//     return stock;
// }

const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("main");
});

// app.get('/stock', async (req, res)=>{
//     let data = await loadStock();
//     res.json(data);
// });

server.listen(9000, ()=>{
    console.log("실행중");
});