import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/conditions/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "✅ Conditions:\n\n1. Respect others\n2. Follow rules\n3. Enjoy the group 🚀"
  );
});
