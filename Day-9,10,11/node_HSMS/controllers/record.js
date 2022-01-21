const recordModal = require('../models').Record;

const addRecord = async(req, res) => {
    try {
      const addRC = await recordModal.create({
            record_name: req.body.record_name,
            record_cnic: req.body.record_cnic,
            record_mobile:req.body.record_mobile,
            record_challan: req.body.record_challan,
            record_payment: req.body.record_payment,
            record_installments: req.body.record_installments,

        })
        res.status(201).send(addRC);
    } catch(err){
      res.status(500).json({'error':err.message})
    }
  }

  const getAllRecord = async (req, res) => {
    try {
       const getRecord = await recordModal.findAll({
        });
        res.send(getRecord)
    } catch(err){
        res.status(500).json({'error': err.message});
    }
  }

  const getSingleRecord = async (req, res) => {
      try {
      const singleRecord = await recordModal.findOne({
          where:{
              id: req.params.record_id,
          }
      });
      if(singleRecord === null || singleRecord === undefined){
        res.status(404).json({"error": "Record not found against this ID"})
      }
      else {
          res.send(singleRecord)
      } 
     } catch(err){
          res.status(500).json({'error': err.message})
    }
  }

  const updateRecord = async (req, res) => {
      try {
        let updatedObj = {}
        if(updatedObj.record_name !== null
            || updatedObj.record_cnic !== null
            || updatedObj.record_mobile !== null
            || updatedObj.record_payment !== null
            || updatedObj.record_installments !== null
            || updatedObj.record_challan !== null
            )
            updatedObj.record_name = req.body.record_name;
            updatedObj.record_cnic = req.body.record_cnic;
            updatedObj.record_mobile = req.body.record_mobile;
            updatedObj.record_payment = req.body.record_payment;
            updatedObj.record_installments = req.body.record_installments;
            updatedObj.record_challan = req.body.record_challan;
           
            await recordModal.update(updatedObj,{
             where:{
                 id: req.body.record_id
             }
         });
         res.send("Record Updated Successfully")
      } catch(err){
          res.status(500).json({'error': err.message})
      }
  }

  const deleteRecord = async (req, res) => {
      try {
       await recordModal.destroy({
          where:{
              id: req.body.record_id
          }
      });

      res.send('Record Deleted Successfully')
    } catch(err){
        res.status(500).json({'error': err.message})
    }
    
  }


module.exports = {
    addRecord,
    getAllRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
}