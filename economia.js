const PREFIXO = '!';
// Simulação de base de dados (em memória)
const saldos = {}; 

module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;

        const userId = message.author.id;

        // Comando: Trabalhar (!trabalhar)
        if (message.content === PREFIXO + 'trabalhar') {
            const ganho = Math.floor(Math.random() * 100) + 50; // Ganha entre 50 e 150
            saldos[userId] = (saldos[userId] || 0) + ganho;
            message.reply(`💰 Trabalhaste bem e ganhaste **${ganho} moedas**!`);
        }

        // Comando: Carteira (!carteira)
        if (message.content === PREFIXO + 'carteira') {
            const saldo = saldos[userId] || 0;
            message.reply(`💳 Tens atualmente **${saldo} moedas** na tua carteira.`);
        }
    });
};