const express = require('express');
const router = express.Router();
const plotController = require('../controllers/plot');

router.post('/add', plotController.addPlot)
router.get('/all', plotController.getAllPlotRecord)
router.get('/single/:plot_id', plotController.getSinglePlotRecord)
router.post('/update', plotController.updatePlotRecord)
router.post('/delete', plotController.deletePlotRecord)

module.exports = router