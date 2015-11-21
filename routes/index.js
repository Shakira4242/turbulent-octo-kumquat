var express = require('express');
var router = express.Router();
var brain = require('brain');
var Position = require('../models/position');

/* GET home page. */
router.get('/', function(req, res, next) {
	var net = new brain.NeuralNetwork();
	net.train([{input: { chelsea: 0.8, bayern: 0.2 }, output: { chelsea: 1 }},
	           {input: { chelsea: 0.9, bayern: 0.1 }, output: { bayern: 1 }},
	           {input: { chelsea: 0.3, bayern: 0.7 }, output: { bayern: 1 }}]);
	var output = net.run({ chelsea: 0.5, bayern: 0.5 });
	console.log(output);
	
	res.render('index', { title: 'Express' });
});

router.get('/template', function(req, res, next) {
	res.render('template', { funny: 'hahahahah' });
});

module.exports = router;
