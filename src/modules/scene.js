const { Markup, Extra} = require('telegraf');
bot.use(require('./src/main'));

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

module.exports = scene;
