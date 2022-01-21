

const Customer = require('../models').Customer;
const fileTransfer = require('../models').fileTranfer;
const fileCancel = require('../models').fileCancel;

    const addCustomer = async(req, res) => {
        try {
           customer = await Customer.create({
                customer_name:req.body.customer_name,
                customer_cnic: req.body.customer_cnic,
                customer_mobile:req.body.customer_mobile,
                customer_address:req.body.customer_address,
                admin_email:req.body.admin_email,
                admin_password:req.body.admin_password
            })
            res.status(201).send(customer);
        } catch(err){
          res.status(500).json({'error':err.message})
        }
      }

      const getAllCustomers = async (req, res) => {
        try {
            getCustomers = await Customer.findAll({
                include:[{
                    model:fileTransfer,
                    as: 'FTCustomerId'
                },
                {
                    model:fileCancel,
                    as:'FCId'
                }
            ]
            });
            res.send(getCustomers)
        } catch(err){
            res.status(500).json({'error': err.message});
        }
      }

      const getSingleCustomer = async (req, res) => {
          try {
          const singleCustomer = await Customer.findOne({
              where:{
                  id:req.params.customer_id,
              }
          });
          if(singleCustomer === null || singleCustomer === undefined){
            res.status(404).json({"error": "Customer not found against this ID"})
          }
          else {
              res.send(singleCustomer)
          } 
         } catch(err){
              res.status(500).json({'error': err.message})
        }
      }

      const updateCustomer = async (req, res) => {
          try {
            let updatedObj = {}
            if(updatedObj.customer_name !== null
                || updatedObj.customer_cnic !== null
                || updatedObj.customer_mobile !== null
                || updatedObj.customer_address !== null
                || updatedObj.admin_email !== null
                || updatedObj.admin_password !== null)

                updatedObj.customer_name = req.body.customer_name;
                updatedObj.customer_cnic = req.body.customer_cnic;
                updatedObj.customer_mobile = req.body.customer_mobile;
                updatedObj.customer_address = req.body.customer_address;
                updatedObj.admin_email = req.body.admin_email;
                updatedObj.admin_password = req.body.admin_password;
                
                await Customer.update(updatedObj,{
                 where:{
                     id:req.body.customer_id
                 }
             });
             res.send('Customer Updated Successfully')
          } catch(err){
              res.status(500).json({'error': err.message})
          }
      }

      const deleteCustomer = async (req, res) => {
          try {
           await Customer.destroy({
              where:{
                  id: req.body.customer_id
              }
          });

          res.send('Customer Deleted Successfully')
        } catch(err){
            res.status(500).json({'error': err.message})
        }
        
      }
  
module.exports = {
    addCustomer,
    getAllCustomers,
    getSingleCustomer,
    deleteCustomer,
    updateCustomer
}
