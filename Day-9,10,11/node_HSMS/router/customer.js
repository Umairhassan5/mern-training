const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers');


router.post('/add', customerController.addCustomer)
router.get('/all', customerController.getAllCustomers)
router.get('/single/:customer_id', customerController.getSingleCustomer)
router.post('/delete', customerController.deleteCustomer);
router.post('/update', customerController.updateCustomer)

module.exports = router