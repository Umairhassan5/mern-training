const Joi = require('joi') 
const schemas = { 

 // Customer Middleware
  customerAdd: Joi.object().keys({ 
    customer_name: Joi.string().min(2).max(12).required(),
    customer_cnic: Joi.number().min(13).required(),
    customer_mobile: Joi.number().min(11).required(),
    customer_address: Joi.string().min(20).max(200).required(),
    admin_email: Joi.string().email().required(),
    admin_password: Joi.string().min(8).max(20).required(),
    
    }) ,
    
    customerFindSingle: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }) ,

    customerUpdate: Joi.object().keys({
        customer_name: Joi.string().min(2).max(12).optional(),
        customer_cnic: Joi.number().min(13).optional(),
        customer_mobile: Joi.number().max(11).optional(),
        customer_address: Joi.number().min(20).max(200).optional(),
        admin_email: Joi.string().email().optional(),
        admin_password: Joi.string().min(8).max(20).optional(),
    }),

    customerDelete: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    // File Cancel Middleware
    fileCancelAdd:Joi.object().keys({
        cancel_reason: Joi.string().min(8).max(200).required(),
        fileCancelId: Joi.number().min(1).required(),
    }),

    fileCancelFindSingle:Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    fileCancelUpdate:Joi.object().keys({
        cancel_reason: Joi.string().min(8).max(200).optional(),
        fileCancelId: Joi.number().min(1).optional(),
    }),

    fileCancelDelete:Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    // File Transfer Middleware

    fileTransferAdd: Joi.object().keys({
        new_owner_name: Joi.string().min(3).max(40).required(),
        new_owner_cnic: Joi.number().min(13).required(),
        fileTransferCustomerId: Joi.number().min(1).required(),
    }),

    fileTransferFindSingle: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    fileTransferUpdate:Joi.object().keys({
        new_owner_name: Joi.string().min(3).max(40).optional(),
        new_owner_cnic: Joi.number().min(13).optional(),
        fileTransferCustomerId: Joi.number().min(1).optional(),
    }),

    fileTransferDelete: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    // Plot Middleware
    plotAdd: Joi.object().keys({
        plot_size: Joi.number().min(1).required(),
        plot_phase: Joi.string().min(3).max(20).required(),
        plot_block: Joi.string().min(3).max(20).required(),
        plot_type: Joi.string().min(3).max(200).required(),
    }),

    plotFindSingle: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    plotUpdate: Joi.object().keys({
        plot_size: Joi.number().min(1).optional(),
        plot_phase: Joi.string().min(3).max(20).optional(),
        plot_block: Joi.string().min(3).max(20).optional(),
        plot_type: Joi.string().min(3).max(200).optional(),
    }),

    plotDelete: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    // Records Middleware
    recordAdd: Joi.object().keys({
        record_name: Joi.string().min(3).max(40).required(),
        record_cnic: Joi.number().min(13).required(),
        record_mobile: Joi.number().min(11).required(),
        record_challan: Joi.string().min(3).max(100).required(),
        record_payment: Joi.number().min(1).max(200).required(),
        record_installments: Joi.string().min(1).max(200).required(),
    }),

    recordFindSingle: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

    recordUpdate: Joi.object().keys({
        record_name: Joi.string().min(3).max(40).optional(),
        record_cnic: Joi.number().min(13).optional(),
        record_mobile: Joi.number().min(11).optional(),
        record_challan: Joi.string().min(3).max(100).optional(),
        record_payment: Joi.number().min(1).max(200).optional(),
        record_installments: Joi.string().min(1).max(200).optional(),
    }),

    recordDelete: Joi.object().keys({
        id: Joi.number().min(1).required(),
    }),

  // define all the other schemas below 
}; 
module.exports = schemas;