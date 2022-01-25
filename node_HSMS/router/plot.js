const express = require('express');
const router = express.Router();
const plotController = require('../controllers/plot');
const schemas = require('../middleware/customSchemas'); // Schemas Validation
const middleware = require('../middleware/customMiddleware'); // Middleware Format

/**
 * @swagger
 * components:
 *   schemas:
 *     FileTransfer:
 *       type: object
 *       required:
 *         - plot_size
 *         - plot_phase
 *         - plot_block
 *         - plot_type
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the plot schemas
 *         plot_size:
 *           type: bigint
 *           description: The plot size should be given
 *         plot_phase:
 *           type: string
 *           description: The plot phase should be given
 *         plot_block:
 *           type: string
 *           description: The plot block for the better search should be given
*          plot_type:
 *           type: string
 *           description: The plot type should be given
 *       example:
 *         id: 1
 *         plot_size: 23
 *         plot_phase: 7D
 *         plot_block: H-Block
 *         plot_type: Executive
 */

/**
  * @swagger
  * tags:
  *   name: Plot 
  *   description: The plot table manages the record of plots   APIs
  */

 /**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a plot record in database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name: plot_size
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The plot size is the required field which should be entered
 *         name: plot_phase
 *         schema:
 *           type: string
 *         required: true
 *         description: Plot phase field required
 *         name: plot_block
 *         schema:
 *           type: string
 *         required: true
 *         description: The plot block is the required field
 *         name: plot_type
 *         schema:
 *           type: string
 *         required: true
 *         description: The plot type is the required field
 *     responses:
 *       201/200:
 *         description: The plot  record added successfully
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plot'
 *       
 */

router.post('/add', middleware(schemas.plotAdd, 'body'), plotController.addPlot)

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all file plot records from the  database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name: plot_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       201/200:
 *         description: The  plot listing.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plot'
 *       
 */

router.get('/all', plotController.getAllPlotRecord)

/**
 * @swagger
 * /single:
 *   get,.,.,.:
 *     summary: Get a single plot record from the  database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name: plot_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The plot id is required to get the single record of plot
 *     responses:
 *       201/200:
 *         description: The plot record against this ID is: 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plot'
 *       
 */

router.get('/single/:plot_id', middleware(schemas.plotFindSingle, 'params'), plotController.getSinglePlotRecord)

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete single plot record from the database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name: plot_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The plot id is required
 *     responses:
 *       201/200:
 *         description: The plot record against this id deleted successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plot'
 *       
 */

router.post('/delete',middleware(schemas.recordDelete, 'params'), plotController.deletePlotRecord)

/**
 * @swagger
 * /update:
 *   post:
 *     summary: Update an existing  plot record/records in  database
 *     tags: [PLOT]
 *     parameters:
 *       - in: path
 *         name: plot_size
 *         schema:
 *           type: bigint
 *         required: true
 *         description: The plot size is required
 *         name: plot_block
 *         schema:
 *           type: string
 *         required: true
 *         description: The plot block is required
 *         name: plot_phase
 *         schema:
 *           type: string
 *         required: true
 *         description: The plot phase is required
*          name: plot_type
 *         schema:
 *           type: string
 *         required: true
 *         description: The plot type is required
 *     responses:
 *       201/200:
 *         description: The plot record updated successfully 
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plot'
 *       
 */

router.post('/update', middleware(schemas.plotUpdate, 'body'),  plotController.updatePlotRecord)


module.exports = router