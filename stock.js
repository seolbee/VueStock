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
            let json = JSON.parse(xml.xml2json(body, {compact: true, spaces:4}));
            resolve(json.stockprice);
        });
    });
}

async function makeStock(){
    let {TBL_DailyStock : dailyStockList, TBL_StockInfo : info, TBL_TimeConclude : timeStockList} = await getStock();
    let stock = {
        info : info._attributes,
        dailyStockList : dailyStockList.DailyStock,
        timeStockList : timeStockList.TBL_TimeConclude
    };
    return stock;
}

module.exports={
    getStock,
    makeStock
}