const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record');
const schemas = require('../middleware/customSchemas');
const middleware = require('../middleware/customMiddleware');


/**
 * @swagger
 * components:
 *   schemas:
 *     Records:
 *       type: object
 *       required:
 *         - record_name
 *         - record_cnic
 *         - record_mobile
 *         - record_challan
 *         - record_payment
 *         - record_installments
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the records schemas
 *         record_name:
 *           type: string
 *           description: The record name should be given
 *         record_cnic:
 *           type: bigint
 *           description: The record cnic should be given
 *         record_mobile:
 *           type: bigint
 *           description: The record mobile should be given
 *         record_challan:
 *           type: string
 *           description: The record challan should be given
 *         record_payment:
 *           type: bigint
 *           description: The record payment should be given
  *         record_installments:
 *           type: string
 *           description: The record installments should be given
 *       example:
 *         id: 1
 *         record_name: ALi Hamza
 *         record_cnic: 38923723984792
 *         record_mobile: 303839937292
 *         record_challan: pdf
 *         record_payment: 39000
 *         record_installments: 4-Executive
 */

/**
  * @swagger
  * tags:
  *   name: Record 
  *   description: The Record table manages the record of customer records   APIs
  */

 /**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a  record in database
 *     tags: [RECORD]
 *     parameters:
 *       - in: path
 *         name: record_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The record_name  is the required field which should be entered
 *         name: record_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The record_cnic is the required field
 *         name: record_mobile
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The record_mobile is the required field
 *         name: record_challan
 *         schema:
 *           type: string
 *         required: true
 *         description: The record_challan type is the required field
 *         name: record_payment
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The record_payment type is the required field
 *         name: record_challan
 *         schema:
 *           type: string
 *         required: true
 *         description: The record_installments plan  is the required field
 *     responses:
 *       201/200:
 *         description: The record added successfully
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Record'
 *       
 */

router.post('/add', middleware(schemas.recordAdd, 'body'), recordController.addRecord)

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all  records from the  database
 *     tags: [RECORD]
 *     parameters:
 *       - in: path
 *         name: record_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       201/200:
 *         description: The  plot listing.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Record'
 *       
 */


router.get('/all', recordController.getAllRecord)

/**
 * @swagger
 * /single:
 *   get,.,.,.:
 *     summary: Get a single  record from the  database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name:record_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The  rcord_id is required to get the single record
 *     responses:
 *       201/200:
 *         description: The  record against this ID is: 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Record'
 *       
 */

router.get('/single/:record_id', middleware(schemas.recordFindSingle, 'params'), recordController.getSingleRecord)

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete single  record from the database
 *     tags: [RECORD]
 *     parameters:
 *       - in: path
 *         name: record_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The record id is required
 *     responses:
 *       201/200:
 *         description: The record against this id deleted successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Record'
 *       
 */

 router.post('/delete', middleware(schemas.recordDelete, 'params'), recordController.deleteRecord)

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update an existing   record/records in  database
 *     tags: [RECORD]
 *     parameters:
 *       - in: path
 *         name: record_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The record name is required
 *         name: record_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The record cnic is required
 *         name: record_mobile
 *         schema:
 *           type: bigint
 *         required: true
 *         description: Thr record mobile is required
 *         name: record_challan
 *         schema:
 *           type: string
 *         required: true
 *         description: The record challan is required
 *         name: record_payment
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The record payment is required
 *         name: record_installments
 *         schema:
 *           type: string
 *         required: true
 *         description: The record installments is required
 *     responses:
 *       201/200:
 *         description: The  record updated successfully 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Record'
 *       
 */


router.post('/update', middleware(schemas.recordUpdate, 'body'), recordController.updateRecord)


module.exports = router