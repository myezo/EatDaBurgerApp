var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(burger_data){
		console.log(burger_data);
		res.render('index');
	})
})

router.put('/burger/update', function(req, res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	})
})

module.exports = router;