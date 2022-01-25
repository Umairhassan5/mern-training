const express = require('express');
const router = express.Router();
const fileCancelController = require('../controllers/fileCancel');
const schemas = require('../middleware/customSchemas');
const middleware = require('../middleware/customMiddleware');

/**
 * @swagger
 * components:
 *   schemas:
 *     FileCancel:
 *       type: object
 *       required:
 *         - cancel_reason
 *         - fileCancelId
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the file cancel schemas
 *         cancel_reason:
 *           type: string
 *           description: The file cancel reason which must be given
 *         fileCancelId:
 *           type: integer
 *           description: This is the foreign key of the customer table
 *       example:
 *         id: 1
 *         cancel_reason: Due to the prices increases you are not eligible for this plot.
 *         fileCancelId: 1
 */

/**
  * @swagger
  * tags:
  *   name: FileCancel
  *   description: The file cancel manages the record of file cancel APIs
  */

 /**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a file cancel record in database
 *     tags: [FILECANCEL]
 *     parameters:
 *       - in: path
 *         name: cancel_reason
 *         schema:
 *           type: string
 *         required: true
 *         description: The file cancel reason 
 *         name: fileCancelId
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The foreign key of customer table which relates the customer to the file cancel table 
 *     responses:
 *       201/200:
 *         description: The file cancel record added successfully
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileCancel'
 *       
 */


router.post('/add', middleware(schemas.fileCancelAdd, 'body'), fileCancelController.addFilCancelData)

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all file cancels record from the  database
 *     tags: [FILECANCEL]
 *     parameters:
 *       - in: path
 *         name: file_cancel_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       201/200:
 *         description: The all file cancel from the database
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileCanceel'
 *       
 */

router.get('/all', fileCancelController.getAllCancelFiles)

/**
 * @swagger
 * /single:
 *   get,.,.,.:
 *     summary: Get a single file cancel record from the  database
 *     tags: [FILECANCEEL]
 *     parameters:
 *       - in: path
 *         name: file_cancel_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: To get single recod of the file cancel from the database
 *     responses:
 *       201/200:
 *         description: The file cancel record against this ID is: 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileCancel'
 *       
 */

router.get('/single/:file_cancel_id', middleware(schemas.fileCancelFindSingle, 'params'), fileCancelController.getSingleCancelFile)

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete single file cancel from the database
 *     tags: [FILECANCEL]
 *     parameters:
 *       - in: path
 *         name: file_cancel_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The file cancel id
 *     responses:
 *       201/200:
 *         description: The fiel cancel will be deleted from the databases
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileCancel'
 *       
 */

 router.post('/delete', middleware(schemas.fileCancelDelete, 'params'), fileCancelController.deleteFileCancelRecord)

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update an existing  fiel cancel  in database
 *     tags: [FILECANCEL]
 *     parameters:
 *       - in: path
 *         name: cancel_reason
 *         schema:
 *           type: string
 *         required: true
 *         description: The file cancel name
 *         name: fileCancelId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The foreign key of custmer table
 *     responses:
 *       201/200:
 *         description: The file cancel record updated successfully 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileCancel'
 *       
 */


router.post('/update', middleware(schemas.fileCancelUpdate, 'body'), fileCancelController.updateFileCancelRecord)


module.exports = router