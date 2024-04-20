const { Telegraf, Composer, Markup, Extra} = require('telegraf');
const composer = new Composer();
require('dotenv').config();

const token = process.env.TOKEN;
if (!token || !token == undefined) {
   throw new Error("Не удалось получить токен");
}

const bot = new Telegraf(token);

function loggerMiddleware(ctx, next) {
   const id = ctx.update.update_id;
   const date = new Date().toLocaleString();
   const log = `[${date}] ${id}`;
   ctx.log = log;
   next();
}

bot.command('start', loggerMiddleware, (ctx) => {
   console.log(ctx.log)
   ctx.reply(
      "Hello! <b>Go next?</b>", 
      Extra.markup(
         Markup.inlineKeyboard([[Markup.callbackButton("Далее", 'next')]])
      ).HTML()
   );
});

bot.launch().then(() => {
   console.log('бот запущен!');
});

module.exports = composer;

