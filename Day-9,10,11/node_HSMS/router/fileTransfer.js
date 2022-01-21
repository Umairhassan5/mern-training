const express = require('express');
const router = express.Router();
const fileTransferController = require('../controllers/fileTranfser');

router.post('/add', fileTransferController.addFilTransferData)
router.get('/all', fileTransferController.getAllFiles)
router.get('/single/:file_transfer_id', fileTransferController.getSingleFile)
router.post('/update', fileTransferController.updateFileRecord)
router.post('/delete', fileTransferController.deleteFileRecord)

module.exports = router