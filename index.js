const {Telegraf, Markup, Extra} = require('telegraf');
const bot = new Telegraf('7132944839:AAEvSA9xG3vnYvqvES1dujypfXU3sfWcpqM');

bot.command('start', (ctx) => {
   ctx.reply(
      "Hello! <b>Go next?</b>", 
      Extra.markup(
         Markup.inlineKeyboard([[Markup.callbackButton("Далее", 'next')]])
      ).HTML()
   );
});

bot.action('next', (ctx) => {
   ctx.editMessageText(
      "Как дела?",
      Extra.markup(
         Markup.inlineKeyboard([
            [
               Markup.callbackButton("Хорошо", 'good'),
               Markup.callbackButton("Плохо", 'bad'),
            ],
            [Markup.callbackButton("Удалить сообщение", 'delete')],
         ])
      )
   );
});

bot.action('good', (ctx) => {
   ctx.editMessageText('Бл1, давай');
});

bot.action('bad', (ctx) => {
   ctx.editMessageText('Эх ты, сука!');
});

bot.action('delete', (ctx) => {
   ctx.deleteMessage();
});

bot.launch().then(() => {
   console.log('бот запущен!');
});