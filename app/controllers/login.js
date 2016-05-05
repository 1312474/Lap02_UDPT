
/*!
 * Module dependencies.
 */

var User = require('../models/user');


exports.index = function (req, res) {
  res.render('login/index', {
    title: 'ĐĂNG NHẬP'
  });
};

exports.login = function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	console.log(email);
	console.log(password);
	User.findOne({email: email, hashed_password: password}, function(err,user){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		if(!user){
			return res.status(404).send();					
		}
		return res.status(200).send();
		res.redirect('login');
	})
};