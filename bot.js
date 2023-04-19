const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Crea el bot de Telegram y especifica el token de acceso
const token = 'TOKEN_DE_ACCESO_DEL_BOT';
const chatId = 'ID_DE_CHAT_DEL_USUARIO'; // Reemplaza esto por el ID de chat del usuario que recibirá los mensajes diarios
const bot = new TelegramBot(token, { polling: true });

// Función para enviar un mensaje diario preguntando "Hoy fuiste a bucear?"
function enviarMensajeDiario() {
  // Obtener la hora actual
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutoActual = ahora.getMinutes();

  // Definir la hora a la que se enviará el mensaje diario
  const horaEnvio = 11; // 8 de la noche
  const minutoEnvio = 22;

  // Calcular la diferencia entre la hora actual y la hora de envío
  let tiempoRestante = (horaEnvio - horaActual) * 3600 + (minutoEnvio - minutoActual) * 60;
  if (tiempoRestante < 0) {
    tiempoRestante += 24 * 3600; // Si ya pasó la hora de envío, sumamos 24 horas para que se envíe al día siguiente.
  }

  // Establecer un temporizador para enviar el mensaje diario en el momento adecuado
  setTimeout(() => {
    bot.sendMessage(chatId, 'Hoy fuiste a bucear? /cuentame');
  }, tiempoRestante * 1000); // El temporizador espera en milisegundos, por lo que multiplicamos por 1000.
}

// Programar el cron job para que se ejecute todos los días a las 8 de la noche
cron.schedule('0 20 * * *', enviarMensajeDiario);

// Llamada al bot de Telegram
bot.on('message', async (msg) => {
  try {
    bot.sendMessage(msg.chat.id, `Los datos de WindGuru son:`);
    // Obtener la hora actual
    


    // Enviar los datos al usuario
    //bot.sendMessage(msg.chat.id, `Los datos de WindGuru son: ${datos}`);
  } catch (error) {
    console.error(error);
  }
});


