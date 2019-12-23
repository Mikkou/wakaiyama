require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(process.env.TOKEN, { polling: true })

module.exports = class Base {
  static bot = bot
}