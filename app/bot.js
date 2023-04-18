const TelegramBot = require('node-telegram-bot-api');
const token = '6025769421:AAFxAQwC6nsGsKOYIjCzW5vNaFiounc8tTU';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hola! Soy un bot de Telegram.');
});
module.exports = bot;
