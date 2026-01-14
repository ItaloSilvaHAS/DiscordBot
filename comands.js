/**
 * 📜 LISTA DE COMANDOS - BEE BEE BOT (HASBELAND)
 * * Este arquivo serve como um guia de referência para a sintaxe 
 * e funcionalidades de cada comando do bot.
 */

const COMANDOS_BEE_BEE = {
    // --- BRINCADEIRAS & UTILITÁRIOS ---
    diversao: [
        {
            comando: "!dado",
            descricao: "Rola um dado de 6 lados.",
            sintaxe: "!dado"
        },
        {
            comando: "!avatar",
            descricao: "Mostra a foto de perfil em tamanho grande.",
            sintaxe: "!avatar ou !avatar @usuario"
        }
    ],

    // --- ECONOMIA ---
    economia: [
        {
            comando: "!trabalhar",
            descricao: "Ganha uma quantidade aleatória de moedas (50-150).",
            sintaxe: "!trabalhar"
        },
        {
            comando: "!carteira",
            descricao: "Verifica o saldo atual de moedas do usuário.",
            sintaxe: "!carteira"
        }
    ],

    // --- MODERAÇÃO ---
    moderacao: [
        {
            comando: "!limpar",
            descricao: "Apaga uma quantidade específica de mensagens do canal (limite de 100).",
            sintaxe: "!limpar [número]",
            permissao: "Gerenciar Mensagens"
        }
    ],

    // --- FUNÇÕES AUTÔNOMAS (SEM PREFIXO) ---
    autonomo: [
        {
            evento: "Menção de Ajuda",
            gatilho: "Palavras 'bot' e 'ajuda' na mesma frase.",
            acao: "Bee Bee responde com uma mensagem de auxílio."
        },
        {
            evento: "Boas-Vindas",
            gatilho: "Novo membro entra no servidor.",
            arquivo: "welcomeexit.js",
            assets: "hi.gif"
        },
        {
            evento: "Despedida",
            gatilho: "Membro sai do servidor.",
            arquivo: "welcomeexit.js",
            assets: "bye.gif"
        }
    ]
};

module.exports = COMANDOS_BEE_BEE;