const User = require('../models/user');

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
  };