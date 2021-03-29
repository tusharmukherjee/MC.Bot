require("dotenv").config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.MCBOTTOKEN);


// const replies = [
//     'लौडा साला',
//     'बेहनचोद',
//     'फक फक फक...',
//     'चुप मादरचोद',
//     'गांडू',
//     'टुट्टी गाँड',
//     'हैट लॉडु',
//     'भोसडीवाले',
//     'गांड फाड़ डूंगा',
//     'लंड ले ले मेरा',
//     'ज़ादा गाँड ना फुलाये',
//     'चुतिये',
//     'कुत्ते का पिला साला',
//     'गण सुजा डूंगा'
// ]

// client.on('message', gotMcMessage);

async function gotMcMessage(msg){
    console.log(msg);
    if (msg.channel.id == '822710399152553994'){

        let tokens = msg.content.split(' ');
        if(msg.content == "mc"){
            msg.channel.send('मैं एम.सी बॉट आपके खिदमत में हाजिर हूं 🙏');
        }

        else if(msg.content == "apshabd ka oopyog kare"){
            // const koibhi = Math.floor(Math.random() * replies.length);
            // msg.channel.send(replies[koibhi]);
            msg.channel.send("मैं एम.सी बॉट अब अच्छा बालक बन गया हूं")
        }

        else if(tokens[0] == "!gif"){
        
        let search = "dog"
        if(tokens.length > 1){
            search = tokens.slice(1, tokens.length).join(" ");
        }    
        
        let url = `https://g.tenor.com/v1/search?q=${search}&key=${process.env.TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        const indexno = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[indexno].url);
        }  
    }
}


function automsg(){
    let day = new Date(); 
    let utcDay = day.getUTCDay();
    let utchours = day.getUTCHours();
    let utcMinutes = day.getUTCMinutes();
    let changeDay = "";

    if(utchours >= 17 && utcMinutes >= 29){
        changeDay = utcDay + 1;
    }
    if (utchours >= 00 && utcMinutes >= 00) {
        changeDay = utcDay - 1;
    }



    // Moday Table--------------
    if (changeDay == 1){
        if(utchours == 3 && utcMinutes == 20){
             client.send("राम राम जी 🙏\n\nMr.Saurabh Gupta (OS)\nMeet: https://meet.google.com/lookup/ctv6kwrdcp?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 30){
             client.send("Mr.Tanuj Kumar (PQT)\nMeet: https://meet.google.com/lookup/c2eauseakw?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 22){
            console.log("plz");
             client.send("test pass");
        }
        else if(utchours == 5 && utcMinutes == 30){
             client.send("Mr. Amit (CC)\nMeet: https://meet.google.com/lookup/eglcp4njhs?authuser=1&hs=179");
        }
        else if(utchours == 8 && utcMinutes == 10){
             client.send("Kanika Garg (SEPM)\nMeet: https://meet.google.com/lookup/ef4rgsip3e?authuser=1&hs=179");
        }
        else if(utchours == 9 && utcMinutes == 00){
             client.send("Batch 1\nMr. Abhishek Chauhan (CC Lab)\nMeet: https://meet.google.com/lookup/eglcp4njhs?authuser=1&hs=179 \n\nBatch 2\nMr Anurag Singh/ Rajiv Ranjan\nMeet: https://meet.google.com/lookup/gkmtyn7lwr");
        }
    }


    // Tuesday Table------------
    if (changeDay == 2){
        if(utchours == 3 && utcMinutes == 20){
             client.send("राम राम जी 🙏\n\nMr.Tanuj Kumar (PQT)\nMeet: https://meet.google.com/lookup/c2eauseakw?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 30){
             client.send("Arti Sharma (CPS -1)\nMeet: https://meet.google.com/lookup/e6obb4y2fu?authuser=1&hs=179");
        }
        else if(utchours == 5 && utcMinutes == 30){
             client.send("Rajiva Ranjan (APP)\nMeet: https://meet.google.com/lookup/fw3ddngntg");
        }
        else if(utchours == 6 && utcMinutes == 30){
             client.send("Mr. Jay Prakash Chaubey (Social)\nMeet: https://meet.google.com/lookup/bokoyk4c4v");
        }
        else if(utchours == 8 && utcMinutes == 10){
             client.send("Kanika Garg (SEPM)\nMeet: https://meet.google.com/lookup/ef4rgsip3e?authuser=1&hs=179");
        }
        else if(utchours == 9 && utcMinutes == 00){
             client.send("Batch 1:\nMr.Himanshu/ Jeetu (DAA)\nMeet: https://meet.google.com/lookup/b7oecgbbyn \n\nBatch 2\nSaurabh/ Sachi Pandey (OS Lab)\nMeet: https://meet.google.com/lookup/ctv6kwrdcp");
        }
    }


    //Wednesday Table----------
    if (changeDay == 3){
        if(utchours == 3 && utcMinutes == 20){
             client.send("राम राम जी 🙏\n\nMr.Saurabh Gupta (OS)\nMeet: https://meet.google.com/lookup/ctv6kwrdcp?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 30){
             client.send("Mr.Tanuj Kumar (PQT)\nMeet: https://meet.google.com/lookup/c2eauseakw?authuser=1&hs=179");
        }
        else if(utchours == 5 && utcMinutes == 30){
             client.send("Rajiva Ranjan (APP)\nMeet: https://meet.google.com/lookup/fw3ddngntg\n\nBatch 2\nMr.Anurag Singh\nMeet: https://meet.google.com/lookup/gkmtyn7lwr");
        }
        else if(utchours == 6 && utcMinutes == 30){
             client.send("Mr.Himanshu Sekhara (DAA)\nMeet: https://meet.google.com/lookup/b7oecgbbyn");
        }
        else if(utchours == 8 && utcMinutes == 10){
             client.send("Mr. Amit (CC)\nMeet: https://meet.google.com/lookup/eglcp4njhs?authuser=1&hs=179");
        }
        else if(utchours == 9 && utcMinutes == 00){
             client.send("Batch 1\nSaurabh Gupta/ Kanika Garg (OS)\nMeet: https://meet.google.com/lookup/ctv6kwrdcp \n\nBatch 2\nKanika Garg/ Ruby Singh (SEPM)\nMeet: https://meet.google.com/lookup/ef4rgsip3e");
        }
    }


    //Thursday Table------------
    if (changeDay == 4){
        if(utchours == 3 && utcMinutes == 20){
             client.send("राम राम जी 🙏\n\nMr.Tanuj Kumar (PQT)\nMeet: https://meet.google.com/lookup/c2eauseakw?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 30){
             client.send("Mr.Vinay Kumar Sharma (Critical Thinking)\nMeet: https://meet.google.com/lookup/gfzoqdepre");
        }
        else if(utchours == 5 && utcMinutes == 30){
             client.send("Rajiva Ranjan (APP)\nMeet: https://meet.google.com/lookup/fw3ddngntg\n\nBatch 2\nMr.Anurag Singh\nMeet: https://meet.google.com/lookup/gkmtyn7lwr");
        }
        else if(utchours == 6 && utcMinutes == 30){
             client.send("Mr.Himanshu Sekhara (DAA)\nMeet: https://meet.google.com/lookup/b7oecgbbyn");
        }
        else if(utchours == 8 && utcMinutes == 10){
             client.send("Mr.Saurabh Gupta (OS)\nMeet: https://meet.google.com/lookup/ctv6kwrdcp?authuser=1&hs=179");
        }
        else if(utchours == 9 && utcMinutes == 00){
             client.send("Batch 1\nKanika Garg/ Ruby Singh (SEPM)\nMeet: https://meet.google.com/lookup/ef4rgsip3e \n\nBatch 2\nHimanshu/ Jeetu (DAA)\nMeet: https://meet.google.com/lookup/b7oecgbbyn");
        }
    }


    //Friday Table---------------
    if (changeDay == 5){
        if(utchours == 3 && utcMinutes == 20){
             client.send("राम राम जी 🙏\n\nKanika Garg (SEPM)\nMeet: https://meet.google.com/lookup/ef4rgsip3e?authuser=1&hs=179");
        }
        else if(utchours == 4 && utcMinutes == 30){
             client.send("Mr.Tanuj Kumar (PQT)\nMeet: https://meet.google.com/lookup/c2eauseakw?authuser=1&hs=179");
        }
        else if(utchours == 5 && utcMinutes == 30){
             client.send("Arti Sharma (CPS -1)\nMeet: https://meet.google.com/lookup/e6obb4y2fu?authuser=1&hs=179");
        }
        else if(utchours == 6 && utcMinutes == 30){
             client.send("Kalpana Patel (EVS)\nMeet: https://meet.google.com/lookup/dxynmk724s");
        }
        else if(utchours == 8 && utcMinutes == 10){
             client.send("Mr.Himanshu Sekhara (DAA)\nMeet: https://meet.google.com/lookup/b7oecgbbyn");
        }
        else if(utchours == 9 && utcMinutes == 00){
             client.send("Batch 1\nAnurag Singh/ Rajiv Ranjan (APP Lab)\nMeet: https://meet.google.com/lookup/gkmtyn7lwr \n\nBatch 2\nSatya Sai/ Abhishek Chauhan (CC Lab)\nMeet: https://meet.google.com/lookup/ep53rbrwtf");
        }
    }
}

client.on('ready', () =>{console.log("success");});
client.on(`ready`, automsg);
client.on('message', gotMcMessage);
