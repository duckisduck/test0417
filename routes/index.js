var express = require('express');
var router = express.Router();
var usermodel =require('../models/db').usermodel;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ucenter',function(req,res){
	//var query_par = {name:req.body.name};
	var newuser = {name:req.body.name,password:req.body.password};
	usermodel.count(newuser,function(err,doc){
		if(doc>=1){
			console.log("success");
		}else{
			console.log("failed");
		}
		res.redirect('/');
	});

});

router.post('/reg',function(req,res){
	var query_par = {name:req.body.name};
	var newuser = {name:req.body.name,password:req.body.password};	
	usermodel.count(query_par,function(err,doc){
		
	})
})

module.exports = router;
