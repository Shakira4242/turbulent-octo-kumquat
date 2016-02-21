var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	User.count({facebookId: req.body.id}, function (err, count){ 
	    if(count>0){
	      //document exists });
	    }
	    else{
		    var newUser = new User({name: 'Akash',facebookId: req.body.id, project: []});
				newUser.save(function (err, fluffy) {
				  if(err){
				  	return console.error(err);
				  }
				});
			}
			res.redirect('/homepage');
		}); 
});

router.get('/template', function(req, res, next) {
	res.render('template', { funny: 'hahahahah' });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage',{});
});

router.post('/list', function(req, res, next) {
	User.find({facebookId: req.body.id},function (err, count){
		var stuff = count[0].project;
		res.json({stuff: stuff});
	});
});

router.post('/newproject', function(req,res,next){
	User.findOneAndUpdate({facebookId: req.body.id},{$push: {project: {name: req.body.name, code: 0}}},{safe: true, upsert: true},function(err, model) {
		if(err) console.log(err);
    res.redirect('/homepage');
  });
});


router.post('/homepage', function(req, res, next) {
  res.render('homepage',{funny: 'hahahahah'});
});

module.exports = router;
