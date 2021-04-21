const credential = {
    host:'config.thesoft.shop',
    user:'tmf0909',
    database:'stock',
    password:'tmf@030309'
}

const session = "yydh";

const mysqlSession = {
    host:credential.host,
    user:credential.user,
    database:'stock',
    password:'tmf@030309'
}

module.exports = {
    c : credential,
    s: session,
    ms:mysqlSession
}