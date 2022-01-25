const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require("dotenv").config();
const { API_PORT } = process.env;
const bodyParser = require('body-parser');

// Options for swagger
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Housing Society Management System API",
			version: "1.0.0",
			description: "HSMS buying plot and sale",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};
// Routes
const customerRoute = require('./router/customer');
const fileTransferRoute = require('./router/fileTransfer')
const fileCancelRoute = require('./router/fileCancel')
const plotRoute = require('./router/plot')
const recordRoute = require('./router/record')

// Port and App
const app = express();
const port = API_PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Swagger API docs
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use('/customer', customerRoute) // Customer 
app.use('/fileTrans', fileTransferRoute) // File Transfer
app.use('/fileCancel', fileCancelRoute) // File Cancel 
app.use('/plot', plotRoute) // Plot
app.use('/record', recordRoute)  // Record


app.listen(port, () => {
    console.log(`App is listening on port ${port}!`)
});