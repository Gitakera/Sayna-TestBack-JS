const express = require('express');
const router = express.Router();


//import controller part
const registerCtrl = require('../controllers/user');

router.post('/', registerCtrl.signup);



router.use((req, res, next) => {
  console.log('execution de code register complet !');
});

module.exports = router;

