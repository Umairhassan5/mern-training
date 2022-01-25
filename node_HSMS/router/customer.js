const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers');
// const customerMiddleware = require('../middleware/customer')

const schemas = require('../middleware/customSchemas');
const middleware = require('../middleware/customMiddleware');

router.post('/login', customerController.loginCustomer)
router.post('/logout', customerController.logout)
/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - customer_name
 *         - customer_cnic
 *         - customer_mobile
 *         - customer_address
 *         - admin_email
 *         - admin_password
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the customer schemas
 *         customer_name:
 *           type: string
 *           description: The name of the customer
 *         customer_cnic:
 *           type: bigint
 *           description: The customer cnic which must be unique
 *         customer_mobile:
 *           type: bigint
 *           description: The mobile number of the customer
 *         customer_address:
 *           type: string
 *           description: The address of the customer
 *         admin_email:
 *           type: string
 *           description: If the admin login with the unique email which is slected for the admin only
 *         admin_password:
 *           type: string
 *           description: The password of the admin
 *       example:
 *         id: 1
 *         customer_name: Umair Ul hassan
 *         customer_cnic: 3898368238972
 *         customer_mobile: 0309884023823
 *         customer_address: H-block Invozone Lahore
 *         admin_email: umair@gmail.com
 *         admin_password: u0987hkd!
 */


 /**
  * @swagger
  * tags:
  *   name: Customer
  *   description: The customer managing data API
  */

 /**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a customer in database
 *     tags: [CUSTOMER]
 *     parameters:
 *       - in: path
 *         name: customer_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer name
 *         name: customer_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The customer unique cnic 
 *         name: customer_mobile
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The customer mobile number 
 *         name: customer_address
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer address 
 *         name: admin_email
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin email if the admin come with the selected email,otherwise customer login 
 *         name: admin_password
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin unique password
 *     responses:
 *       201/200:
 *         description: The newly created book description
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       
 */

router.post('/add' , middleware(schemas.customerAdd, 'body'), customerController.addCustomer),

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all customers in database
 *     tags: [CUSTOMER]
 *     parameters:
 *       - in: path
 *         name: customer_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       201/200:
 *         description: The all customer from the database
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       
 */

router.get('/all', customerController.getAllCustomers)

/**
 * @swagger
 * /single:
 *   get,.,.,.:
 *     summary: Get a single customer from the  database
 *     tags: [CUSTOMER]
 *     parameters:
 *       - in: path
 *         name: customer_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: To get single customer from the database
 *     responses:
 *       201/200:
 *         description: The Customer against this ID is: 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       
 */

router.get('/single/:customer_id', middleware(schemas.customerFindSingle, 'params'), customerController.getSingleCustomer)
/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete single customer from the database
 *     tags: [CUSTOMER]
 *     parameters:
 *       - in: path
 *         name: customer_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer id
 *     responses:
 *       201/200:
 *         description: The customer will be deleted from the databases
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       
 */


router.post('/delete', middleware(schemas.customerDelete, 'params'), customerController.deleteCustomer);

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update an existing  customer in database
 *     tags: [CUSTOMER]
 *     parameters:
 *       - in: path
 *         name: customer_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer name
 *         name: customer_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The customer unique cnic 
 *         name: customer_mobile
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The customer mobile number 
 *         name: customer_address
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer address 
 *         name: admin_email
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin email update  
 *         name: admin_password
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin unique password update
 *     responses:
 *       201/200:
 *         description: The customer record updated successfully 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       
 */

router.post('/update', middleware(schemas.customerUpdate, 'body'), customerController.updateCustomer)

module.exports = router