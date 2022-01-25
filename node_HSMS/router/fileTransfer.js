const express = require('express');
const router = express.Router();
const fileTransferController = require('../controllers/fileTranfser');
const schemas = require('../middleware/customSchemas'); // Validation Schemas
const middleware = require('../middleware/customMiddleware'); // Middleware Format 

/**
 * @swagger
 * components:
 *   schemas:
 *     FileTransfer:
 *       type: object
 *       required:
 *         - new_owner_name
 *         - new_owner_cnic
 *         - fileTransferCustomerId
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the file transfer schemas
 *         new_owner_name:
 *           type: string
 *           description: The new owner name  which must be given
 *         new_owner_cnic:
 *           type: integer
 *           description: The new owner cnic must be given
 *         fileTransferCustomerId:
 *           type: integer
 *           description: The foreign key of the customer table which link this table to customer table
 *       example:
 *         id: 1
 *         new_owner_name: ALi Hassan
 *         new_owner_cnic: 2323289326892
 *         fileTransferCustomerId: 1
 */

/**
  * @swagger
  * tags:
  *   name: FileTransfer 
  *   description: The file transfer manages the record of file transfer  APIs
  */

 /**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a file transfer record in database
 *     tags: [FILETRANSFER]
 *     parameters:
 *       - in: path
 *         name: new_owner_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The file transfer new owner name 
 *         name: new_owner_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The cnic of new owner name the file which will be transfered by.
*          name: fileTransferCustomerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The foreign key which relates with the customer table.
 *     responses:
 *       201/200:
 *         description: The file transfer record added successfully
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileTransfer'
 *       
 */

router.post('/add', middleware(schemas.fileTransferAdd, 'body'), fileTransferController.addFilTransferData)

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all file transfer records from the  database
 *     tags: [FILETRANSFER]
 *     parameters:
 *       - in: path
 *         name: file_transfer_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       201/200:
 *         description: The  file transfer fetched record.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileTransfer'
 *       
 */


router.get('/all', fileTransferController.getAllFiles)

/**
 * @swagger
 * /single:
 *   get,.,.,.:
 *     summary: Get a single file transfer record from the  database
 *     tags: [FILETRANSFER]
 *     parameters:
 *       - in: path
 *         name: file_transfer_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: To get single recod of the file transfer from the database
 *     responses:
 *       201/200:
 *         description: The file transfer record against this ID is: 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileTransfer'
 *       
 */

router.get('/single/:file_transfer_id', middleware(schemas.fileTransferFindSingle, 'params'), fileTransferController.getSingleFile)

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete single file transfer record from the database
 *     tags: [FILETRANSFER]
 *     parameters:
 *       - in: path
 *         name: file_transfer_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The file transfer id
 *     responses:
 *       201/200:
 *         description: The file transfer deleted successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileTransfer'
 *       
 */

router.post('/delete',  middleware(schemas.fileTransferDelete, 'params'), fileTransferController.deleteFileRecord)

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update an existing  file transfer record/records  in  database
 *     tags: [FILETRANSFER]
 *     parameters:
 *       - in: path
 *         name: new_owner_name
 *         schema:
 *           type: string
 *         required: true
 *         description: The file transfer new owner name
 *         name: new_owner_cnic
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The file transfer new owner cnic
*         name: fileTransferCustomerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The file transfer foreign key which belongs to the customer table
 *     responses:
 *       201/200:
 *         description: The file transfer record updated successfully 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileTransfer'
 *       
 */

router.post('/update', middleware(schemas.fileTransferUpdate, 'body'), fileTransferController.updateFileRecord)


module.exports = router