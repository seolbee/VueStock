const request = require('request-promise-native');
const xml = require('xml-js');
const option = {
    uri:"http://asp1.krx.co.kr/servlet/krx.asp.XMLSise",
    qs:{
        code : "035420"
    }
}
function getStock(){
    return new Promise((resolve, rej)=>{
        request(option, (res, err, body)=>{
            let json = xml.xml2json(body, {compact: true, spaces:4});
            resolve(json);
        })
    });
}

module.exports={
    getStock,
    stockList:[]
}