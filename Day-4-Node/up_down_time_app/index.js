/*
* Primary FIle for the API
*
*
*/

// Dependencies

const http = require('http')
const url = require('url')
const stringDecoder = require('string_decoder').StringDecoder;

// The server will respond to all requests with the string

const server = http.createServer((req, res)=>{
    
    // Get the URL and parse it
    let parsedUrl = url.parse(req.url, true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimedPath = path.replace(/^\/+|\/+$/g, '');
    // Get string query parameters
    let strQuery = parsedUrl.query;

    // Get Request Method
    let method = req.method.toLowerCase();

    // Get Request Headers as an object 
    let headers = req.headers;

    // console.log('Request Headers recieved which are:' ,headers)

    // String Decoder query
    let decoder = new stringDecoder('utf-8');
    let buffer = ''
    req.on('data', (data)=>{
        buffer += decoder.write(data);
    });
    req.on('end', ()=>{
        buffer +=decoder.end();

        // Choose the handler this request should go to, If one is not there go the not found handler
        let chooseHandler = typeof(router[trimedPath]) !==undefined ? router[trimedPath] : handlers.notfound;
        console.log(chooseHandler)
        let data = {
            'trimedPath' : trimedPath,
            'queryStringObject' : strQuery,
            'method' : method,
            'headers' : headers,
            'payload' : buffer,
        };

        // Route the request to the handler specified in the router
            chooseHandler = (data, (statusCode, payLoad)=>{
                // USe the status code called by the handler or defualt to 200
                statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

                // Use the status code called by the handler or the default to empty object
                payLoad = typeof(payLoad) == 'object' ? payLoad : {};

                let payloadString = JSON.stringify(payLoad);

                // Return the response
                res.writeHead(statusCode);
                res.end(payloadString)

                 // Log the request Path
                console.log('Returning this response:', statusCode, payloadString);
            });
        

       
        
    })

})

// Define the handlers
    let handlers = {};

// Sample handlers
    handlers.sample = (data, callback)=>{
        // Callback a http status code and payload
        callback(406),{'name': 'Sample Handlers'}
    }
// Not found handlers
    handlers.notfound = (data, callback)=>{
        // Hanlers not found
        callback(404)
    }
// Define a request router

    let router = {
        'sample' : handlers.sample
    }

server.listen( 3000, ()=>{
    console.log('The server is listning on the port 3000')
})