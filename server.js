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
const fs = require('fs');
const mime = require('mime');
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
    saveUninitialized:false,
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
    let filename = '';
    if(req.file !== undefined){
        let file = req.file;
        filename = file.filename;
    }
    const {userId:id, username:name, userPhone:phone, userPassword:password} = req.body;
    let sql = "INSERT INTO users (userid, name, phone, password, img) VALUES (?, ?, ?, PASSWORD(?), ?)";
    await pool.query(sql, [id, name, phone, password, filename]);
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
        let {idx, userid, name, img, phone} = result[0][0];
        req.session.user = {idx, userid, name, img, phone};
        req.session.save(()=>{
            res.json({msg:"로그인 완료", success:true, session:{userid, name}});
        });
    }
});

app.get('/logout', (req, res)=>{
    if(req.session.user === null) return;
    req.session.destroy();
    res.redirect('/');
});

app.get("/profile/userimg", (req, res)=>{
    let uploadPath = path.join(__dirname, 'public/upload');
    let defaultImage = "users.png";
    if(req.session != null && req.session.user.img === "") req.session.user.img = defaultImage;
    req.session.save();
    let imgSrc = path.join(uploadPath, req.session.user.img);
    let imgType = mime.getType(imgSrc);
    fs.readFile(imgSrc, async (err, data)=>{
        res.writeHead(200, {'Content-Type' : imgType});
        await res.write(data);
        res.end();
    });
});

app.get("/stocks", async (req, res)=>{
    // let sql = "SELECT DISTINCT stock_datas.code, stock_kinds.name, stock_kinds.from_date, stock_kinds.kos, stock_kinds.list_count, stock_datas.price, stock_datas.date FROM (SELECT date, MAX(price) as price, code FROM stock_datas WHERE code = '000020' GROUP BY (UNIX_TIMESTAMP(date) DIV 300), code) AS stock_datas, stock_kinds WHERE stock_datas.code = stock_kinds.code ORDER BY stock_datas.date ASC LIMIT 10";
    let sql = "SELECT * FROM stock_datas WHERE code = '000020' LIMIT 1000000";
    //SELECT date, MAX(price) FROM stocks WHERE code = '000020' GROUP BY (UNIX_TIMESTAMP(date) DIV 300)
    let result = await pool.query(sql);
    res.json(result[0]);

});

app.get("/kos", async(req, res)=>{

});

app.get("/stock_kinds", async(req, res)=>{
    let sql = "SELECT * FROM stock_kinds";
    let result = await pool.query(sql);
    res.json(result[0]);
});

// app.get('/stock', async (req, res)=>{
//     let data = await loadStock();
//     res.json(data);
// });

server.listen(9000, ()=>{
    console.log("실행중");
});