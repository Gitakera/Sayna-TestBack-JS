const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//import controller part
const deleteCtrl = require('../controllers/delete');


//delete user
router.delete('/:id',auth, deleteCtrl.deleteUser);


router.use((req, res, next) => {
  console.log('execution de code delete complet !');
});

module.exports = router;