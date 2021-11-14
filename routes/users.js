const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//import controller part
const usersCtrl = require('../controllers/users');



//list all existing users
router.get('/',auth,  usersCtrl.listUsers);


router.use((req, res, next) => {
  console.log('execution de code listing complet !');
});

module.exports = router;