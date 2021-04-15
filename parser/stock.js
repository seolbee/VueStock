const request = require('request-promise-native');
const iconv = require('iconv-lite');
const option = {
    uri:"https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930https://polling.finance.naver.com/api/realtime",
    qs:{
        query : "SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930"
    },
    encoding:null
}
function getStock(){
    // return new Promise((resolve, rej)=>{
        
    // });

    request(option, (res, err, body)=>{
        const result = iconv.decode(body, 'EUC-KR');
        console.log(result);
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

setInterval(getStock, 1000)

module.exports={
    getStock,
    makeStock
}

//https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930