const cron = require('node-cron');
const fs = require('fs');

cron.schedule('* * * * *', function() {
    console.log('Running Cron Job');
    fs.unlink('./error.log', err => {
      if (err) throw err;
      console.log('Error file successfully deleted');
    });
  });