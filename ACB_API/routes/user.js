// routes/user.js
const express = require('express');
const router = express.Router();
const conTrollerUser = require('../controllers/conTrollerUser');

router.get('/', conTrollerUser.getAllUser); 
router.post('/', conTrollerUser.postUser); 
router.post('/login', conTrollerUser.login); 
router.get('/:sdt', conTrollerUser.findSDT); 
router.put('/:idng_gui/:sotien/:idng_nhan', conTrollerUser.thaydoiSoTien); 


module.exports = router;
