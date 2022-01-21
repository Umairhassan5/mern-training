const plot = require('../models').Plot;

const addPlot = async(req, res) => {
    try {
      const addPlot = await plot.create({
            plot_size: req.body.plot_size,
            plot_phase: req.body.plot_phase,
            plot_block: req.body.plot_block,
            plot_type: req.body.plot_type,

        })
        res.status(201).send(addPlot);
    } catch(err){
      res.status(500).json({'error':err.message})
    }
  }

  const getAllPlotRecord = async (req, res) => {
    try {
       const getPlot = await plot.findAll({
        });
        res.send(getPlot)
    } catch(err){
        res.status(500).json({'error': err.message});
    }
  }

  const getSinglePlotRecord = async (req, res) => {
      try {
      const singlePlotFile = await plot.findOne({
          where:{
              id: req.params.plot_id,
          }
      });
      if(singlePlotFile === null || singlePlotFile === undefined){
        res.status(404).json({"error": "Plot Record not found against this ID"})
      }
      else {
          res.send(singlePlotFile)
      } 
     } catch(err){
          res.status(500).json({'error': err.message})
    }
  }

  const updatePlotRecord = async (req, res) => {
      try {
        let updatedObj = {}
        if(updatedObj.plot_size !== null
            || updatedObj.plot_block !== null
            || updatedObj.plot_phase !== null
            || updatedObj.plot_type !== null
            )
            updatedObj.plot_size = req.body.plot_size;
            updatedObj.plot_block = req.body.plot_block;
            updatedObj.plot_phase = req.body.plot_phase;
            updatedObj.plot_type = req.body.plot_type;
           
            await plot.update(updatedObj,{
             where:{
                 id: req.body.plot_id
             }
         });
         res.send("Plot Record Updated Successfully")
      } catch(err){
          res.status(500).json({'error': err.message})
      }
  }

  const deletePlotRecord = async (req, res) => {
      try {
       await plot.destroy({
          where:{
              id: req.body.plot_id
          }
      });

      res.send('Plot Record Deleted Successfully')
    } catch(err){
        res.status(500).json({'error': err.message})
    }
    
  }


module.exports = {
    addPlot,
    getAllPlotRecord,
    getSinglePlotRecord,
    updatePlotRecord,
    deletePlotRecord
}