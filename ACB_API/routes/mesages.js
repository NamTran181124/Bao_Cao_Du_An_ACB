// routes/user.js
const express = require('express');
const router = express.Router();
const conTrollerMessage = require('../controllers/controllerMessages');

router.get('/', conTrollerMessage.getAllMessage); 
router.post('/:id_nguoi_chuyen/:id_nguoi_nhan/:noidung/:sotien/:times', conTrollerMessage.postMessage);
router.get('/:id', conTrollerMessage.findMessage); 



module.exports = router;
