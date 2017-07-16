var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');

db.connection.on('error', function (error) { //监听是否有异常
    console.log("Connection error");
});
db.connection.once('open', function () { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});

var userSchema = new mongoose.Schema({
	name: String,
	password: String
});

var user = db.model('user',userSchema);
exports.usermodel = user;

