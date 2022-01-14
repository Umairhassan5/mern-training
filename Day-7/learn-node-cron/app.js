
// Require dependencies
const nodeCron = require('node-cron')

async function testCroneJob(){
    try{
        console.log('Run this after every minute')
    }
    catch(error){
        console.log(error)
    }

}
// Schedule a job every two minutes 
const job = nodeCron.schedule("* * * * *", testCroneJob);