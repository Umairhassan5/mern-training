const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record');

router.post('/add', recordController.addRecord)
router.get('/all', recordController.getAllRecord)
router.get('/single/:record_id', recordController.getSingleRecord)
router.post('/update', recordController.updateRecord)
router.post('/delete', recordController.deleteRecord)

module.exports = router