require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');

// Token bot dari file .env
const token = process.env.TELEGRAM_BOT_TOKEN;

// ID grup Telegram (bisa didapatkan dengan bot API atau dengan eksperimen)
const chatId = process.env.TELEGRAM_GROUP_ID;

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

// Pesan harian yang akan dikirim
const dailyMessage = ```Daily Testnet
Blockscout: https://t.me/CryptoKidzs/57
PlazaFinance: https://t.me/CryptoKidzs/42
Fiamma: https://t.me/CryptoKidzs/55
Reddio: https://t.me/CryptoKidzs/82
Defa: https://t.me/CryptoKidzs/144
Palldium: https://t.me/CryptoKidzs/158

Weekly Testnet
Variational: https://t.me/CryptoKidzs/53
Intmax: https://t.me/CryptoKidzs/123
Polyhedra: https://t.me/CryptoKidzs/68```;

// Jadwal pengiriman pesan setiap hari pukul 08:00
schedule.scheduleJob('58 14 * * *', () => {
    bot.sendMessage(chatId, dailyMessage)
        .then(() => console.log('Pesan harian terkirim!'))
        .catch((err) => console.error('Gagal mengirim pesan:', err));
});

// Event handler jika ada pesan masuk (opsional)
bot.on('message', (msg) => {
    console.log(`Pesan diterima dari ${msg.chat.id}: ${msg.text}`);
});

console.log('Bot berjalan dan siap mengirim pesan harian!');
