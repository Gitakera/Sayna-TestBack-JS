const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const express = require('express');
const path = require('path');

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
      	first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_naissance: req.body.date_naissance,
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

};

exports.login = (req, res, next) => {
	console.log("entrer");
	 User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANAIVO MALALA Andoniaina',
              { expiresIn: '6h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.homePage = (req, res, next) => {
  //res.json({ message: "HOME PAGE"});
  //res.render('index');
  res.sendfile('./views/index.html');

};