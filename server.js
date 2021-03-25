const path = require("path");
const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.render("main");
});

server.listen(9000, ()=>{
    console.log("실행중");
});