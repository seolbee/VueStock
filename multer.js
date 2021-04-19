const multer = require('multer');

let setStorage = {
    destination : function(req, file, cb){
        cb(null, 'public/upload/');
    },

    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1];
        cb(null, file.fieldname + '-' + Date.now() + `.${type}`);
    }
};

const storage = multer.diskStorage(setStorage);
const upload = multer({storage});

module.exports = {
    upload
}