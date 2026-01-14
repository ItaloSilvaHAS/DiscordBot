const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const path = require('path');

module.exports = (client) => {
    // --- EVENTO DE BOAS-VINDAS ---
    client.on('guildMemberAdd', member => {
        const canal = member.guild.channels.cache.find(ch => ch.name.includes('boas-vindas'));
        if (!canal) return;

        // Anexando o hi.gif da pasta Assets
        const file = new AttachmentBuilder(path.join(__dirname, 'Assets', 'hi.gif'));

        const embedBoasVindas = new EmbedBuilder()
            .setColor('#FF69B4') // Rosa Hot Pink bem feminino
            .setTitle(`✨ Uma nova estrela chegou! ✨`)
            .setAuthor({ name: `Seja muito bem-vinda(o)!`, iconURL: member.user.displayAvatarURL() })
            .setDescription(
                `Oii, **${member.user.username}**! 💖\n\n` +
                `Bem-vindo(a) ao **HASBELAND**! Sou a **Bee Bee**, sua botzinha oficial e estou aqui para deixar tudo mais fofo e divertido! ✨\n\n` +
                `🎀 **Dicas da Bee Bee:**\n` +
                `• Dá uma olhadinha nas nossas regras para termos uma convivência linda!\n` +
                `• Escolha seus cargos para eu saber mais sobre você!\n` +
                `• Sinta-se em casa e comece a brilhar no chat!\n\n` +
                `Estou muito feliz que você chegou! Vamos nos divertir muito? 🌈🌷`
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
            .setImage('attachment://hi.gif')
            .setFooter({ text: `Agora somos ${member.guild.memberCount} coraçõezinhos aqui!`, iconURL: member.guild.iconURL() })
            .setTimestamp();

        canal.send({ content: `Oii ${member}! ✨`, embeds: [embedBoasVindas], files: [file] });
    });

    // --- EVENTO DE DESPEDIDA ---
    client.on('guildMemberRemove', member => {
        const canal = member.guild.channels.cache.find(ch => ch.name.includes('saida') || ch.name.includes('tchau'));
        if (!canal) return;

        // Anexando o bye.gif da pasta Assets
        const file = new AttachmentBuilder(path.join(__dirname, 'Assets', 'bye.gif'));

        const embedSaida = new EmbedBuilder()
            .setColor('#9B59B6') // Roxo delicado
            .setTitle(`💔 Ahh, que saudade...`)
            .setDescription(
                `O nosso céu ficou um pouquinho menos brilhante hoje... ✨\n\n` +
                `**${member.user.username}** deu tchauzinho e saiu do **HASBELAND**.\n\n` +
                `Espero que a gente se encontre de novo em breve! Vou guardar um lugarzinho para você aqui, tá bom? Beijinhos da Bee Bee! 🎀🌸`
            )
            .setImage('attachment://bye.gif')
            .setTimestamp();

        canal.send({ embeds: [embedSaida], files: [file] });
    });
};