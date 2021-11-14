//**************************************************
//NOT USED CONTROLLER : NO BCRYPT METHODE ONLY HERE
//**************************************************

const User = require('../models/user');

exports.registerUser = (req, res, next) => {
	delete req.body._id;  //remove unused data from body
  	const user = new User({
    ...req.body
 	});

 	console.log(req.body);
 	
  	user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur enregistré !'}))
    .catch(error => res.status(400).json({ error }));

};