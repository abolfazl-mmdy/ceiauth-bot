import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/conditions/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "✅ Conditions:\n\n1. Respect others\n2. Follow rules\n3. Enjoy the group 🚀"
  );
});
