const fileTransfer = require('../models').fileTranfer;

const addFilTransferData = async(req, res) => {
    try {
      const  addFileTransfer = await fileTransfer.create({
          
            new_owner_name: req.body.new_owner_name,
            new_owner_cnic: req.body.new_owner_cnic,
            fileTransferCustomerId: req.body.fileTransferCustomerId,  
        })
        res.status(201).send(addFileTransfer);
    } catch(err){
      res.status(500).json({'error':err.message})
    }
  }

  const getAllFiles = async (req, res) => {
    try {
        getFiles = await fileTransfer.findAll({
        });
        res.send(getFiles)
    } catch(err){
        res.status(500).json({'error': err.message});
    }
  }

  const getSingleFile = async (req, res) => {
      try {
      const singleFile = await fileTransfer.findOne({
          where:{
              id:req.params.file_transfer_id,
          }
      });
      if(singleFile === null || singleFile === undefined){
        res.status(404).json({"error": "File Record not found against this ID"})
      }
      else {
          res.send(singleFile)
      } 
     } catch(err){
          res.status(500).json({'error': err.message})
    }
  }

  const updateFileRecord = async (req, res) => {
      try {
        let updatedObj = {}
        if(updatedObj.new_owner_name !== null
            || updatedObj.new_owner_cnic !== null
            || updatedObj.fileTransferCustomerId !== null
            )

            updatedObj.new_owner_name = req.body.new_owner_name;
            updatedObj.new_owner_cnic = req.body.new_owner_cnic;
            updatedObj.fileTransferCustomerId = req.body.fileTransferCustomerId;

            await fileTransfer.update(updatedObj,{
             where:{
                 id:req.body.file_transfer_id
             }
         });
         res.send('File Transfer Record Updated Successfully')
      } catch(err){
          res.status(500).json({'error': err.message})
      }
  }

  const deleteFileRecord = async (req, res) => {
      try {
       await fileTransfer.destroy({
          where:{
              id: req.body.file_transfer_id
          }
      });

      res.send('File Record Deleted Successfully')
    } catch(err){
        res.status(500).json({'error': err.message})
    }
    
  }


module.exports = {
    addFilTransferData,
    getAllFiles,
    getSingleFile,
    updateFileRecord,
    deleteFileRecord
}