const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//import controller part
const updateCtrl = require('../controllers/update');


//edit user
router.put('/:id',auth,  updateCtrl.updateUser);


router.use((req, res, next) => {
  console.log('execution de code update complet !');
});

module.exports = router;