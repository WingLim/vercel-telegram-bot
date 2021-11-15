# vercel-telegram-bot

Build a serverless telegram bot with [grammY](https://github.com/grammyjs/grammY) on [Vercel](https://vercel.com/)

## Usage

Install dependencies

```shell
pnpm install
```

### Set up webhook

`BOT_TOKEN` and `BOT_URL` can be set up in `.env`, you can take `.example.env` as a example.

```shell
pnpm run webhook
```

### Deploy

```shell
vercel
```

## Documents

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [grammY Document](https://grammy.dev/)
