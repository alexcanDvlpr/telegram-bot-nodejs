'use strict'

// Creamos el BOT TELEGRAM API
const TelegramBot = require('node-telegram-bot-api');


const token = 'TU-TOKEN-DE-BOT';
const bot = new TelegramBot(token, {polling: true});

var chistes = [
    'chiste1',
    'chiste2',
    'chiste3',
    'chiste4',
    'chiste5'
];

bot.onText(/^\/start/, (msg) => {

    const chatId = msg.chat.id;
    var name = msg.from.first_name;

    bot.sendMessage(chatId, 'Buenas '+ name +'! Ya me has despertado... Cuentame!');
});


bot.onText(/^\/chiste/, function(msg){

    var chatId = msg.chat.id;
    
    var random = Math.floor(Math.random() * chistes.length);

    console.log(random);

    bot.sendMessage(chatId, chistes[random]);
});

bot.onText(/^\!ping/, function(msg){

    var TypeChat = msg.chat.type;
    var chatId = msg.chat.id;
    
    if (TypeChat == 'supergroup'){
        bot.sendMessage(chatId, 'Este es un mensaje genérico.');
    }
    else if (TypeChat == 'private'){
        bot.sendMessage(chatId, 'Pong!');
    };
});

bot.onText(/^\/id/, function(msg){
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Tu Id es: ' + chatId);
});

