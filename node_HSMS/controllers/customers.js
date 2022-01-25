

const Customer = require('../models').Customer;
const fileTransfer = require('../models').fileTranfer;
const fileCancel = require('../models').fileCancel;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

    const loginCustomer = async(req, res) => {
        try{
          const  admin_email = req.body.admin_email;
            console.log(admin_email, 'email')
            const customer = await Customer.findOne({
                include:[{
                    model:fileTransfer,
                    as: 'FTCustomerId'
                },
                {
                    model:fileCancel,
                    as:'FCId'
                }
            ],
            where:{admin_email}
            });
            if(customer && await(bcrypt.compareSync(req.body.admin_password, customer.admin_password))){
                const token = jwt.sign({
                    id: customer.id, admin_email
                }, process.env.TOKEN_KEY,{
                    expiresIn: "2h",
                });
                console.log(token, 'token is')
                customer.token = token;
                customer.update({
                    token:token,
                });
                res.status(200).json({'customer': customer })
            }
            else{
                res.status(400).send('Invalid Credentials');
            }
        }
        catch(err){
            res.status(500).json({'error': err.message})
        }
    }

    const logout = async(req, res) => {
        try{
            const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
            const customer = await Customer.findOne({
                where: {
                    id: req.customer.id,
                }
            });
            customer.token = null;
            customer.update({
                token: null,
            });
            res.status(200).json({'message':'Logged out successfully'});
        
        }
        catch(err){
            res.status(500).json({'error': err.message})
        }
    }

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
            // res.json(req.body)
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
    loginCustomer,
    logout,
    addCustomer,
    getAllCustomers,
    getSingleCustomer,
    deleteCustomer,
    updateCustomer
}
