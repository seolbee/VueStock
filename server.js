const path = require("path");
const http = require('http');
const express = require('express');
const {getStock} = require('./stock');
const bodyParser = require("body-parser");
const app = express();
async function loadStock(){
    let stock = await getStock();
    return stock;
}

const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("main");
});

app.get('/stock', async (req, res)=>{
    let data = JSON.parse(await loadStock());
    res.json(data['stockprice']);
});

server.listen(9000, ()=>{
    console.log("실행중");
});