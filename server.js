const path = require("path");
const http = require('http');
const express = require('express');
const {getRank} = require('./parser/popular');
const bodyParser = require("body-parser");
const app = new express();
const session = require('express-session');
const {upload} = require("./multer");
const {pool} = require('./DB/DB');
const {s} = require('./DB/credential');
// async function loadStock(){
//     let stock = await makeStock();
//     return stock;
// }

const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(upload.single());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:s
}));


app.get("/", (req, res)=>{
    res.render("main");
});

app.get("/popular", async (req, res)=>{
    let rankArr = await getRank();
    res.json(rankArr);
});

app.post("/register", upload.single('userImg'), async (req, res)=>{
    let phone_res = await pool.query("SELECT * FROM users WHERE phone = ?", [req.body.phone]);
    let userid = await pool.query("SELECT * FROM users WHERE userid = ?", [req.body.id]);
    if(phone_res[0].length !== 0 || userid[0].length !== 0){
        res.json({msg:'중복된 회원이 있습니다.', success:false});
        return;
    }
    let file = req.file;
    console.log(file.filename);
    const {userId:id, username:name, userPhone:phone, userPassword:password} = req.body;
    let sql = "INSERT INTO users (userid, name, phone, password, img) VALUES (?, ?, ?, PASSWORD(?), ?)";
    await pool.query(sql, [id, name, phone, password, file.filename]);
    res.json({msg : '회원가입 완료', success:true});
});

app.post("/login", async (req, res)=>{
    let sql = "SELECT * FROM users WHERE userid = ?";
    let result = await pool.query(sql, [req.body.id]);
    if(result[0].length === 0){
        res.json({msg : '아이디가 틀렸습니다. 다시 입력하세요', success:false});
        return;
    }

    sql = "SELECT * FROM users WHERE password = PASSWORD(?)";
    result = await pool.query(sql, [req.body.password]);

    if(result[0].length === 0){
        res.json({msg : '비밀번호가 틀렸습니다. 다시 입력하세요', success:false});
        return;
    }

    sql = "SELECT * FROM users WHERE userid = ? AND password = PASSWORD(?)";
    result = await pool.query(sql, [req.body.id, req.body.password]);
    
    if(result[0].length > 0){
        let session = req.session;
        session.user = result;
        console.log(session);
        res.json({msg:"로그인 완료", success:true});
    }
});

// app.get('/stock', async (req, res)=>{
//     let data = await loadStock();
//     res.json(data);
// });

server.listen(9000, ()=>{
    console.log("실행중");
});