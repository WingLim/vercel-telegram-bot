import { VercelRequest, VercelResponse } from '@vercel/node';
import { Bot, webhookCallback } from 'grammy'

const { BOT_TOKEN } = process.env

const bot = new Bot(BOT_TOKEN)

bot.command('start', async (ctx) => {
    await ctx.reply('Welcome to use bot!')
})

export default (req: VercelRequest, res: VercelResponse) => {
  webhookCallback(bot, 'http')(req, res)
};