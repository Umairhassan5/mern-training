const cron = require('node-cron');
const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user:'umair.hassan@invozone.com',
        pass:'rciizrhsurcqhfgp'
    }

})
cron.schedule('* * * * *', function(){
    console.log('Running crone jobs');

    let messageOptions = {
        from:'umair.hassan@invozone.com',
        to:'Ali.haider@invozone.com',
        subject: 'Job Interview',
        text: 'Hi Ali, We are very happy to announce that you are selected as a Principal Software Engineer. Your Gross Salary will be 2.5 Lac. Hope you put your efforts more than this. Thanks Regards: Umair Ul Hassan . CTO of Invozone'

    };
    transporter.sendMail(messageOptions, (error, info)=>{
        console.log('in the send email')
        if(error){
            throw error;
        }
        else{
            console.log('Message send successfully to the user')
        }
    })
})
