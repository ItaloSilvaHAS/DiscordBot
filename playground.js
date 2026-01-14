const { EmbedBuilder } = require('discord.js');
const PREFIXO = '!';

module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.author.bot) return;
        // Comando: Limpar Chat (!limpar 10)
        if (message.content.startsWith(PREFIXO + 'limpar')) {
            // Verifica se o utilizador tem permissão para gerir mensagens
            if (!message.member.permissions.has('ManageMessages')) {
                return message.reply('Tu não tens permissão para apagar mensagens!');
            }

            const args = message.content.split(' ');
            const quantidade = parseInt(args[1]);

            if (isNaN(quantidade) || quantidade <= 0 || quantidade > 100) {
                return message.reply('Diz-me um número entre 1 e 100 para eu apagar.');
            }

            message.channel.bulkDelete(quantidade, true)
                .then(mensagens => message.channel.send(`🧹 Limpei **${mensagens.size}** mensagens deste canal!`).then(msg => setTimeout(() => msg.delete(), 5000)))
                .catch(err => message.reply('Erro: Só consigo apagar mensagens com menos de 14 dias.'));
        }

        // Comando: Girar Dado
        if (message.content.startsWith(PREFIXO + 'dado')) {
            const resultado = Math.floor(Math.random() * 6) + 1;
            message.reply(`🎲 O dado rolou e o resultado foi: **${resultado}**!`);
        }

        // Comando: Avatar
        if (message.content.startsWith(PREFIXO + 'avatar')) {
            const usuario = message.mentions.users.first() || message.author;
            const embedAvatar = new EmbedBuilder()
                .setColor('#00FFFF')
                .setTitle(`🖼️ Avatar de ${usuario.username}`)
                .setImage(usuario.displayAvatarURL({ size: 1024, dynamic: true }))
                .setFooter({ text: `Requisitado por ${message.author.username}` });

            message.reply({ embeds: [embedAvatar] });
        }

        // Autônomo: Ajuda
        if (message.content.toLowerCase().includes('bot') && message.content.toLowerCase().includes('ajuda')) {
            message.reply('Precisa de algo? Use `!dado`, `!avatar` ou peça para a staff criar os canais de boas-vindas!');
        }
    });
};