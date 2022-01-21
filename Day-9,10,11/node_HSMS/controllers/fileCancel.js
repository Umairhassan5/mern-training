const fileCancel = require('../models').fileCancel;

const addFilCancelData = async(req, res) => {
    try {
      const  fileCancelRecordAdd = await fileCancel.create({
          
            cancel_reason: req.body.cancel_reason,
            fileCancelId: req.body.fileCancelId,
        })
        res.status(201).send(fileCancelRecordAdd);
    } catch(err){
      res.status(500).json({'error':err.message})
    }
  }

  const getAllCancelFiles = async (req, res) => {
    try {
       const getFile = await fileCancel.findAll({
        });
        res.send(getFile)
    } catch(err){
        res.status(500).json({'error': err.message});
    }
  }

  const getSingleCancelFile = async (req, res) => {
      try {
      const singleCancelFile = await fileCancel.findOne({
          where:{
              id: req.params.file_cancel_id,
          }
      });
      if(singleCancelFile === null || singleCancelFile === undefined){
        res.status(404).json({"error": "File Cancel Record not found against this ID"})
      }
      else {
          res.send(singleCancelFile)
      } 
     } catch(err){
          res.status(500).json({'error': err.message})
    }
  }

  const updateFileCancelRecord = async (req, res) => {
      try {
        let updatedObj = {}
        if(updatedObj.cancel_reason !== null
            || updatedObj.fileCancelId !== null
            )
            updatedObj.cancel_reason = req.body.cancel_reason;
            updatedObj.fileCancelId = req.body.fileCancelId;
           
            await fileCancel.update(updatedObj,{
             where:{
                 id: req.body.file_cancel_id
             }
         });
         res.send('File  Cancel Record Updated Successfully')
      } catch(err){
          res.status(500).json({'error': err.message})
      }
  }

  const deleteFileCancelRecord = async (req, res) => {
      try {
       await fileCancel.destroy({
          where:{
              id: req.body.file_cancel_id
          }
      });

      res.send('File Cancel Record Deleted Successfully')
    } catch(err){
        res.status(500).json({'error': err.message})
    }
    
  }


module.exports = {
    addFilCancelData,
    getAllCancelFiles,
    getSingleCancelFile,
    updateFileCancelRecord,
    deleteFileCancelRecord
}