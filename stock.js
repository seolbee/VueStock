const request = require('request');
const xml = require('xml-js');
const url = "http://asp1.krx.co.kr/servlet/krx.asp.XMLSise?code=035420";
const json = {};
request(url, async (err, res, body)=>{
    if(res.statusCode === 200){
        let result = await body;
        json = xml.xml2json(result, {compact: true, spaces:4});
    }
});

module.exports={
    stock:json,
    stockList:[]
}