import { Bot } from "grammy"

const { BOT_TOKEN, BOT_WEBHOOK } = process.env

const bot = new Bot(BOT_TOKEN)

console.log('Setting up telegram bot webhook')
let status = await bot.api.setWebhook(BOT_WEBHOOK)

if (status) {
    console.log('Success to set webhook')
} else {
    console.warn('Fail to set webhook')
}