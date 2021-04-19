const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const option = {
    url : "https://finance.naver.com/sise/lastsearch2.nhn",
    encoding: null
}
function getRank(){
    return new Promise((resolve, reject)=>{
        request(option, (res, err, body)=>{
            body = iconv.decode(body, 'EUC-KR');
            let $ = cheerio.load(body);

            let arr = [];
            for(let i = 0; i<5; i++){
                let name = $(`table.type_5 tr:nth-child(${i+3}) td a`).html();
                let price = $(`table.type_5 tr:nth-child(${i+3}) td:nth-child(4)`).html();
                let yest = $(`table.type_5 tr:nth-child(${i+3}) td:nth-child(5) > span`).html().replace(/[\n|\t]/gi, "");
                let yestIncrease = $(`table.type_5 tr:nth-child(${i+3}) td:nth-child(5) > img`).attr('src').search(/up/g) > 0 ? 'pluse' : 'miuse';
                let startPrice = $(`table.type_5 tr:nth-child(${i+3}) td:nth-child(8)`).html();
                let percent = $(`table.type_5 tr:nth-child(${i+3}) td:nth-child(6) > span`).html().replace(/[\n|\t]/gi, "");
                arr.push({id:i, name, price, yest, yestIncrease, startPrice, percent});
            }

            resolve(arr);
        });
    })
}

module.exports = {
    getRank
}