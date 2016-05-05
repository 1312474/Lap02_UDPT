
/*!
 * Module dependencies.
 */
var User = require('../models/user');


exports.index = function (req, res) {
  res.render('signup/index', {
    title: 'ĐĂNG KÝ'
  });
};


exports.signup = function(req,res, callback){

	name = req.body.name;
	email = req.body.email;
	password = req.body.password;
	
	console.log(name);
	console.log(email);
	console.log(password);

 	var user = new User();
 	user.name = name;
    user.email = email;
    user.hashed_password = password;

   
	User.findOne({email:email}, function(error, object) {
		if (object){
			console.log('Email nay da ton tai');
			
		}	else{
	          	user.save(function(err,saveduser){
		    	if(err){
				 console.log(err);
				 return res.status(500).send();
				}
				else 
				{
					console.log("Them thanh cong;");
					return res.send();
				}
    })
					
			
		}
	})
	

    
};