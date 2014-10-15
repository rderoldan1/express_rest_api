var User = require('../models/user');
var express = require('express');
var router = express.Router();

// Index
router.route('/users').get(function(request, response){
	User.find(function(err, users){
		if(err){
			return response.send(err);
		}

		response.json(users);
	});
});

// Show
router.route('/users/:id').get(function(request, response){
	User.findOne({ _id: request.params.id }, function(err, user){
		if(err){
			return response.send(err);
		}
		response.json(user);
	});
});

// Create
router.route('/users').post(function(request, response){
	var user = new User(request.body);
	
	user.save(function(err){
		if(err){
			return response.send(err);
		}
		response.send({message: 'User Added'});
	});
});

// Update
router.route('/users/:id').put(function(request, response){
	console.log(request.params);
	User.findOne({ _id: request.params.id }, function(err, user){
		if(err){
			return response.send(err);
		}
		for(property in request.body){
			user[property] = request.body[property];
		}

		user.save(function(err){
			if(err){
				return response.send(err);
			}

			response.json({message: 'User updated'});
		});
	});
});

module.exports = router;