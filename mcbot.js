console.log("Mei MC Bot 🙏")

require("dotenv").config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.MCBOTTOKEN);

client.on('ready', mcBotDiscord);

function mcBotDiscord(){
    console.log("🍆🍑")
}

const replies = [
    'लौडा साला',
    'बेहनचोद',
    'फक फक फक...',
    'चुप मादरचोद',
    'गांडू',
    'टुट्टी गाँड',
    'हैट लॉडु',
    'भोसडीवाले',
    'गांड फाड़ डूंगा',
    'लंड ले ले मेरा',
    'ज़ादा गाँड ना फुलाये',
    'चुतिये',
    'कुत्ते का पिला साला',
    'गण सुजा डूंगा'
]

client.on('message', gotMcMessage);

async function gotMcMessage(msg){
    console.log(msg);
    if (msg.channel.id == '822710399152553994' || '749196372552581154'){

        let tokens = msg.content.split(' ');
        if(msg.content == "mc"){
            msg.channel.send('मैं एम.सी बॉट आपके खिदमत में हाजिर हूं 🙏');
        }

        else if(msg.content == "apshabd ka oopyog kare"){
            const koibhi = Math.floor(Math.random() * replies.length);
            msg.channel.send(replies[koibhi]);
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

