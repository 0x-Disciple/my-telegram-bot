require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');

// Token bot dari file .env
const token = process.env.TELEGRAM_BOT_TOKEN;

// ID grup Telegram (bisa didapatkan dengan bot API atau dengan eksperimen)
const chatId = process.env.TELEGRAM_GROUP_ID;

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

// Pesan yang akan dikirim dengan format HTML
const dailyMessage = `<b>Daily Testnet</b>\n
🔹 <a href="https://t.me/CryptoKidzs/57">Blockscout</a>\n
🔹 <a href="https://t.me/CryptoKidzs/42">PlazaFinance</a>\n
🔹 <a href="https://t.me/CryptoKidzs/55">Fiamma</a>\n
🔹 <a href="https://t.me/CryptoKidzs/82">Reddio</a>\n
🔹 <a href="https://t.me/CryptoKidzs/144">Defa</a>\n
🔹 <a href="https://t.me/CryptoKidzs/158">Palldium</a>\n\n

<b>Weekly Testnet</b>\n
🔹 <a href="https://t.me/CryptoKidzs/53">Variational</a>\n
🔹 <a href="https://t.me/CryptoKidzs/123">Intmax</a>\n
🔹 <a href="https://t.me/CryptoKidzs/68">Polyhedra</a>\n
🔹 <a href="https://t.me/CryptoKidzs/263">Zeromile</a>\n
🔹 <a href="https://t.me/CryptoKidzs/266">Odysphere</a>\n

<b>Daily Claim Monad</b>\n
🔹 <a href="https://t.me/CryptoKidzs/467">Dusted</a>\n
🔹 <a href="https://t.me/CryptoKidzs/478">Zaros<a/>\n
🔹 <a href="https://t.me/CryptoKidzs/479">Kizzy<a/>\n
🔹 <a href="https://t.me/CryptoKidzs/480">MetaLeap<a/>\n
🔹 <a href="https://t.me/CryptoKidzs/481">The Vape Labs<a/>\n
🔹 <a href="https://t.me/CryptoKidzs/482">RedBrick<a/>\n
Akan Diupdate Kalo Gak Malas`;

// Fungsi untuk mengirim pesan harian dengan parse_mode HTML
const sendDailyMessage = () => {
    bot.sendMessage(chatId, dailyMessage, {
        parse_mode: "HTML",
        disable_web_page_preview: true, // Menyembunyikan preview link
    })
    .then(() => console.log("✅ Pesan harian terkirim!"))
    .catch(err => console.error("❌ Gagal mengirim pesan:", err));
};

// Jadwal pengiriman pesan setiap hari pukul 08:05 (Waktu Server)
schedule.scheduleJob("05 0 * * *", sendDailyMessage);

// Event handler jika ada pesan masuk (opsional)
bot.on("message", (msg) => {
    console.log(`📩 Pesan diterima dari ${msg.chat.id}: ${msg.text}`);
});

console.log("🚀 Bot berjalan dan siap mengirim pesan harian!");
