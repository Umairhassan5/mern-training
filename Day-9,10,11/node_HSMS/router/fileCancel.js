const express = require('express');
const router = express.Router();
const fileCancelController = require('../controllers/fileCancel');

router.post('/add', fileCancelController.addFilCancelData)
router.get('/all', fileCancelController.getAllCancelFiles)
router.get('/single/:file_cancel_id', fileCancelController.getSingleCancelFile)
router.post('/update', fileCancelController.updateFileCancelRecord)
router.post('/delete', fileCancelController.deleteFileCancelRecord)

module.exports = router