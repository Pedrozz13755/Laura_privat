
/*
bot criado por (BELPHEGOR & ARCANJA)

sla né, poderia pelo menos deixar os créditos

afinal, o bot foi feito por nós

mas vc que sabe.

sei que não é muita coisa, a visto de quem já sabe progamar

mas eu fiz pensando na qualidade

não na quantidade

caso queira suporte entre no nosso grupo

link: https://chat.whatsapp.com/lelNkpVR5C3HTM6Gwe00nv


 creditos:

 ARCANJA

 BELPHEGOR

 SILVER STARS

*/



require("./dono/config.js")
require("./config/data.json")

const { 
default: makeWASocket, downloadContentFromMessage,  emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions, PHONENUMBER_MCC,	 WAFlag,  WANode,	 WAMetric,	 ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,	 WAGroupMetadata,  ProxyAgent,	 waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,	 Browser, makeCacheableSignalKeyStore ,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,	 Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex
} = require('@whiskeysockets/baileys');
let pino = require('pino')
const fs = require('fs')
const axios = require('axios');
const Pino = require('pino')
const yts = require('yt-search');

const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk')
let phoneNumber = "557792142954"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const NodeCache = require("node-cache")
const figlet = require('figlet')
const { exec, spawn, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const premium = JSON.parse(fs.readFileSync('./PEDROZZ-premius/usuarios/premium.json'));
const permite = JSON.parse(fs.readFileSync('./dono/permitidos/permitidos.json'));
const cfonts = require('cfonts');
const speed = require('performance-now')


//anti 
const antilink = JSON.parse(fs.readFileSync('./dono/seguranca/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./dono/seguranca/antifake.json'))
const antiimg = JSON.parse(fs.readFileSync('./dono/seguranca/antiimg.json'))
const antiaudio = JSON.parse(fs.readFileSync('./dono/seguranca/antiaudio.json'))
const antivid = JSON.parse(fs.readFileSync('./dono/seguranca/antivideo.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./dono/seguranca/antilinkhard.json'))
const antipv = JSON.parse(fs.readFileSync('./dono/seguranca/antipv.json'))
const antilinkgp = JSON.parse(fs.readFileSync('./dono/seguranca/antilinkgp.json'))
const anticall = JSON.parse(fs.readFileSync('./dono/seguranca/anticall.json'));
const autofigu = JSON.parse(fs.readFileSync('./laura-Functions/grupos/autofigu.json'))
const palavrao = JSON.parse(fs.readFileSync('./laura-Functions/grupos/palavrao.json'))
const palavra = JSON.parse(fs.readFileSync('./laura-Functions/grupos/palavras.json'))
const antisticker = JSON.parse(fs.readFileSync('./dono/seguranca/antisticker.json'))
const antidoc = JSON.parse(fs.readFileSync('./dono/seguranca/antidoc.json'))
const antiloc = JSON.parse(fs.readFileSync('./dono/seguranca/antiloc.json'))
const antiporn = JSON.parse(fs.readFileSync('./dono/seguranca/antiporn.json'))
//.........
const { isUrl, addLevelingXp, runtime } = require('./arquivos/funções/myfunc')
let autosticker = JSON.parse(fs.readFileSync('./laura-Functions/funções/autosticker.json'));
const autostick = JSON.parse(fs.readFileSync('./laura-Functions/funções/autostickpc.json'))
const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./laura-Functions/laura-Funcões/nescessario.json")





/////////menus////////////////////////////////////
const { menu } = require("./menus/menu.js")
const { menux } = require("./menus/menux.js")
const { only } = require("./menus/only.js")
const { limpeza } = require("./menus/limpeza.js")
const { menuadm } = require("./menus/menuadm.js")
const { tabela } = require("./menus/tabela.js")
const { sound } = require("./menus/sound.js")
const { animes } = require("./menus/animes.js")
const { app } = require("./menus/app.js")
const { musica } = require("./menus/musica.js")
const { efeitos } = require("./menus/efeitos.js")
const { menu18 } = require("./menus/menu18.js")
const { alteradores } = require("./menus/alteradores.js")
const config = JSON.parse(fs.readFileSync("./config/data.json"))
/////////////////////////////////////////////////////////////////////
const { convertSticker } = require("./laura/funcions/swm.js");
const { say } = cfonts
const { palavras } = require('./laura/lib/conselhos.js');
const { linksff } = require('./menus/wallpaperff.js');
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()





//COLOCA OS JSON AKI
//ARQUIVOS PARA SUAS CARACTERES TRAVAZAP CASO VOCÊ NÃO FOR TRAVAZAP IGNORE😆
const { boss } = require('./laura/travas/boss.js')
const { ctt } = require('./laura/travas/boss.js')
const { txt } = require('./laura/travas/boss.js')
const { ios } = require('./laura/travas/boss.js')
const { ui } = require('./laura/travas/boss.js')

/********** FUNÇÕES **********/
const { h2k, generateMessageID, getGroupAdmins, banner, banner2, start, info, sleep, success, close, log } = require('./laura/servidor/servidor.js');

////

const { 
getExtension, Random, 
getFileBuffer, getBuffer,
} = require("./laura/servidor/get.js")



//// DATA E HORA

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm');

//PING
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// CONEXÃO DO BOT
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO
donoName = global.donoName
botName = global.botName
donoNumher = global.donoNumher
donoName2 = global.donoName2
groupDono = global.group
comandos = global.comandos
grupo = global.grupo
botNumber = global.botNumber
prefix = config.prefix
banChats = global.banChats 
totalcmd = global.comandos




console.log(banner.string)
console.log(banner2.string)
console.log(color(figlet.textSync(``, {
		font: 'Pagga',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 80,
		whitespaceBreak: true
        }), 'cyan'))
say(`
▁ ▂ ▄ ▅ ▆ ▇ █LAURA PRIVAT█ ▇ ▆ ▅ ▄ ▂ ▁

> CRIADOR: pedrozz
> INSTAGRAM: @pedrozz_13755
> NÚMERO: 61 999317165
> NOME: LAURA PRIVAT
> BASE DA: SILVER STARS
> INSTAGRAM: @laura_privat13755
> ATUALIZAÇÃO: 17/12/2023`, {
  font: 'console',
  align: 'center',
  gradient: ['blue', 'cyan']
})

       
async function ligarbot() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('./dono/laura-qr')
const { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetryCounterCache = new NodeCache() // para mensagem de nova tentativa, "mensagem de espera"
const laura = makeWASocket({
logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // aparecendo QR no log do terminal
      mobile: useMobile, // API móvel (propensa a banimentos)
      browser: ['Chrome (Linux)', '', ''], // para essas questões https://github.com/Whiske>ySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Chrome (Linux)', '', ''], // para essas questões https://github.com/WhiskeySockets/Baileys/issues/328
      markOnlineOnConnect: true, // definir false para off-line
      generateHighQualityLinkPreview: true, // criar link de visualização alto
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolver mensagens em espera
      defaultQueryTimeoutMs: undefined, // para essas questões https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(laura.ev)

    // login usar código de pareamento
   // Código fonte https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !laura.authState.creds.registered) {
      if (useMobile) throw new Error('Não é possível usar o código de pareamento com a API móvel')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comece com o código do país do seu número do WhatsApp, exemplo : +557792142954")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Digite seu número do WhatsApp \nPor exemplo: +557792142954: `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Pergunte novamente ao digitar o número errado
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comece com o código do país do seu número do WhatsApp, exemplo : +557792142954")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Digite seu número do WhatsApp \nPor exemplo: +557792142954 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await laura.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Seu código de emparelhamento : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
astaroth = laura
laura.ev.on('chats.set', () => {
console.log('setando conversas...')
})

laura.ev.on('contacts.set', () => {
console.log('setando contatos...')
})


laura.ev.on('creds.update', saveCreds)

laura.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await laura.readMessages([key])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")

/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========

//CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO





const criador = `${donoNumher}@s.whatsapp.net`
const numeroBot = laura.user.id.split(":")[0]+"@s.whatsapp.net"
const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await laura.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const registro = JSON.parse(fs.readFileSync('./laura/registro.json'));
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(' ')
const sender = isGroup ? info.key.participant: from
const isPremium = premium.includes(sender)
const ispermite = permite.includes(sender)
const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const argss = body.split(/ +/g)
    const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'));
    const isWelkom = isGroup ? welkom.includes(from) : false









//antis

const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntifake = isGroup ? antifake.includes(from) : false
const isAntiImg = isGroup ? antiimg.includes(from) : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false   
const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false   
const autofigu = JSON.parse(fs.readFileSync('./laura-Functions/grupos/autofigu.json'))
const isAutoStick = autostick.includes(from)
const isAutoSticker = isGroup ? autosticker.includes(from) : false
const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false
const isPalavrao = isGroup ? palavrao.includes(from) : false	
const isAntiSticker = isGroup ? antisticker.includes(from) : false
const Antidoc = isGroup ? antidoc.includes(from) : false
const isAntiPorn = isGroup ? antiporn.includes(from) : false
const Antiloc = isGroup ? antiloc.includes(from) : false



//.............
const content = JSON.stringify(info.message)

const _cashB = JSON.parse(fs.readFileSync('./arquivos/lib/cash_.json'))

let _leveling = JSON.parse(fs.readFileSync('./arquivos/leveling.json'));

const isLevelingOn = isGroup ? _leveling.includes(from) : true 

/**********arquivos joguinho da velha**************/
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./laura-Functions/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./laura-Functions/usuarios/joguinhodavelha2.json'));

const { validmove, setGame } = require('./laura-Functions/tictactoe');

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = body.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./laura-Functions/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (body == "Cex") return reply("why");
if (
body.toLowerCase() == "s" ||
body.toLowerCase() == "sim" ||
body.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./laura-Functions/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
laura.sendMessage(from, {text: chatAccept}, {quoted: selo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
body.toLowerCase() == "n" ||
body.toLowerCase() == "não" ||
body.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./laura-Functions/tictactoe/db/${from}.json`);
 laura.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: selo,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(body), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Jogo termino em um empate 😐
`;
reply(chatEqual);
fs.unlinkSync(`./laura-Functions/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

laura.sendMessage(from, {text: chatWon}, {quoted: selo,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./laura-Functions/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./laura-Functions/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} você no jogo da velha🎉...*_`)      
fs.unlinkSync(`./laura-Functions/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
  
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
laura.sendMessage(from, {text: chatMove}, {quoted: selo,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

//===================================\\

//============== AUTO - BIO =========================\\
const videoIfunny = async t=>new Promise(((e,r)=>{

    axios.get(t,{headers:{"user-agent":"Mozilla/5.0 (Android; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1"}}).then((t=>{

      const $=cheerio.load(t.data);e({status:t.status,criador:"+55 31 7541-6530 👑",resultado:{

        thumb:$('meta[property="og:image"]').attr("content"),

        video:$('meta[property="og:video:url"]').attr("content"),

        autor:$('meta[name="author"]').attr("content"),

        width:$('meta[property="og:video:width"]').attr("content"),

        height:$('meta[property="og:video:height"]').attr("content"),

        legenda:$("h1.HGgf").text()?.trim()||"",

        mimetype:$('meta[property="og:video:type"]').attr("content")}})})).catch(r)}))
//============== AUTO - BIO =========================\\
// By: Lukaz
 setTimeout(() => { 
 laura.updateProfileStatus(`
❯ Tempo online: ${runtime(process.uptime())}
❯ Nome bot: ${botName}
❯ Prefixo: ${prefix}
❯ dono: ${donoName}
❯ Criador:pedrozz
`) },10000)

///࿇ ══━━━━✥MSG DE ti✥━━━━══ ࿇\\\
var ase = new Date();
var timed = ase.getHours();
switch(timed){
case 0: timed = `Boa noite 🌃`; break;
case 1: timed = `Boa noite 🌃`; break;
case 2: timed = `Boa noite 🌇`; break;
case 3: timed = `Bom Dia 🌇`; break;
case 4: timed = `Bom Dia 🌇`; break;
case 5: timed = `Bom Dia 🌇`; break;
case 6: timed = `Bom Dia 🌇`; break;
case 7: timed = `Bom Dia 🌇`; break;
case 8: tempo = `Bom Dia 🌇`; break;
case 9: timed = `Bom Dia 🌇`; break;
case 10: timed = `Bom Dia 🌇`; break;
case 11: timed = `Boa tarde 🌆`; break;
case 12: timed = `Boa tarde 🌆`; break;
case 13: timed = `Boa tarde 🌆`; break;
case 14: timed = `Boa tarde 🌆`; break;
case 15: timed = `Boa tarde 🏙️`; break;
case 16: timed = `Boa tarde 🏙️`; break;
case 17: timed = `Boa tarde 🏙️`; break;
case 18: timed = `Boa noite 🌃`; break;
case 19: timed = `Boa noite 🌃`; break;
case 20: timed = `Boa noite 🌃`; break;
case 21: timed = `Boa noite 🌃`; break;
case 22: timed = `Boa noite 🌃`; break;
case 23: timed = `Boa noite 🌃`; break;
}

///
const separar = body.trim().split(/ +/).slice(1)
const x = separar.join(' ')
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false  
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const { banner, getRandom, getExtension } = require('./laura/funções')


const selo = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": `Texto`,"title": null,'jpegThumbnail': null}}}
const reagir = (reassao) => {
laura.sendMessage(from, {react: {text: reassao, key: info.key}})
}

const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? laura.sendMessage(from, { text: teks.trim(), mentions: memberr }) : laura.sendMessage(from, { text: teks.trim(), mentions: memberr })
    }
    
var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await laura.sendPresenceUpdate('composing', from) 
await esperar(1000)   
laura.sendMessage(from, { text: texto }, {quoted: info})
}

const enviar = (texto) => {
laura.sendMessage(from, { text: texto }, {quoted: info})
}

const reply = (texto) => {
laura.sendMessage(from, { text: texto }, {quoted: info})
}


const esperar = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
//isQuoeted
    const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const listmsg = (from, title, desc, list) => { 
po = laura.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return laura.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''



//==========(REGISTRO)==================\\
const regis = fs.existsSync(`./laura/logins/regis-${sender}.json`)
if(!regis && comando != "login" && isCmd) return reply(`*Olá ${pushname}*\n*eu acho que você ainda não fez o seu login*\n*mais não se preocupe com isso você pode fazer agora*\n\n*você pode se Registra-se com seu nome e sua idade*\n*Siga o exemplo abaixo*\n*${prefix}login pedrozz/18*\n\ndepois disso você pode usar os comandos de boa😊`)
//==========================================
const ativoOuNaoW = () => {

laura.sendButMessage(info.chat, `${ isWelcome3 ? "『 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 』\n\n⟅❗⟆ 𝐑𝐞𝐜𝐮𝐫𝐬𝐨 𝐝𝐞 𝐛𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬 𝐞𝐬𝐭𝐚 𝐚𝐭𝐢𝐯𝐨!":"『 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 』\n\n⟅❗⟆ 𝐑𝐞𝐜𝐮𝐫𝐬𝐨 𝐝𝐞 𝐛𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬 𝐞𝐬𝐭𝐚 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐝𝐨!"}`, [{buttonId: `${ isWelcome3 ? `.bemvindo3 0` : `.bemvindo3 1`}`, buttonText: {displayText: ` ${isWelcome3 ? desativar : ativar}`}, type: 1}], {quoted: live})  }


if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return laura.sendMessage(from, {text:`*OLA ${pushname}* *A MENSAGEM E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`}, {quoted: selo})
await laura.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: selo})
setTimeout(async function () {
laura.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !isCreator  && !info.key.fromMe && !isPremium){ 
reply(`[👤] Ola Humano: ${pushname}\nDesculpe, Mas Atualmente Não Estou Autorizada A Responder Comandos No Privado, Então Irei Lhe Bloquear Ta Bom?\nBjs Da laurita`)
setTimeout(async () => {
laura.updateBlockStatus(sender, 'block')
}, 1000)
return
}
////
//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return laura.sendMessage(from, {text:`*OLA ${pushname}* *A MENSAGEM E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`}, {quoted: selo})
await laura.sendMessage(from, {text: `*STICKER ESTÁ PROIBIDO NESSE GRUPO, ENTÃO VOCÊ SERA BANIDO IMEDIATAMENTE KKKKKK*\n*block ${botName} hehehe*`}, {quoted: selo})
setTimeout(async function () {
laura.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
laura.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
laura.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
laura.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
laura.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       			
}, 0)
} else {
return reply(`*OLA ${pushname}* *A MENSAGEM E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`)
}
}
}


// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
laura.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
laura.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot seu merda, você será bloqueado...\n\n\nblock da laura heheh🤗👻" }).then(() => { 
delay(4000)
laura.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}



//========AUTOFIGU-GP/AUTOFIGU-PV=============

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
laura.sendMessage(from, {sticker: bla}, {quoted: selo})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
laura.sendMessage(from, {sticker: buff}, {quoted: selo}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutoSticker &&  !info.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    
if(budy.includes(`.sticker`) || budy.includes(`.s`) || budy.includes(`.stk`) || budy.includes(`.st`) || budy.includes(`.fsticker`) || budy.includes(`.f`) || budy.includes(`.fstiker`)) return
if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 40)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'deusa')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
laura.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
laura.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}




async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(comando == "tiktok" && comando == "facebook" && comando == "instagram" && comando == "tiktok" && comando == "twitter" && comando == "ytmp3" && comando == "ytmp4" && comando == "play") return
linkgpp = await laura.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}
}
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await laura.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
laura.groupParticipantsUpdate(from, [sender], 'remove')
}
}

/// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*OLA ${pushname}* *A MENSAGEM E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*mandou link comigo online kkkkk se ferrou\nl${botName} a mais pika👻*`)
	     	}, 100)
	     	reply(`*_「Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*OLA ${pushname}*  *A MENSAGEM E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*mandou link comigo online kkkkk se ferrou\nl${botName} a mais pika👻*`)
	     	}, 100)
	     	reply(`*_「 Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`* OLA ${pushname}* *A MENSAGEM  E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*mandou link comigo online kkkkk se ferrou\nl${botName} a mais pika👻*`)
	     	}, 100)
	     	reply(`*_「 Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
          if (isGroupAdmins) return laura.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await laura.sendMessage(from, { text: 'MENSAGEM PROIBIDA,PUNINDO USUÁRIO' }, { quoted: info })
          setTimeout(async function () {
            laura.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }
        
//===========================================\\
// 女⃟⃟女COMANDO NO PV女⃟⃟女
if (!isGroup && isCmd) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女COMANDO NO PV女⃟⃟女▬▭▬▭▬','red'),'\n',
color('┃‣ ✨ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('┃‣ ✨ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('┃‣ ✨ᏟᎷᎠ :','red'),color(comando,'cyan'),'\n',
color('┃‣ ✨ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','red'),'\n')

// MENSAGEM NO PV
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女MENSAGEM NO PV女⃟⃟女▬▭▬▭▬','red'),'\n',
color('┃‣ ✨ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('┃‣ ✨ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('┃‣ ✨ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n',
color('┃‣ ✨MSG :','red'),color(budy,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','red'),'\n')

// COMANDO NO GRUPO
if (isCmd && isGroup) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女COMANDO NO GRUPO女⃟⃟女▬▭▬▭▬','blue'),'\n',
color('┃‣ ✨ᏀᎡႮᏢϴ :','red'),color(groupName,'red'),'\n',
color('┃‣ ✨ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('┃‣ ✨ΝᏆᏟᏦ :','blue'),color(pushname,'gold'),'\n',
color('┃‣ ✨ᏟᎷᎠ :','blue'),color(comando,'gold'),'\n',
color('┃‣ ✨ᎻϴᎡᎪ :','blue'),color(hora,'gold'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','blue'),'\n')

// MENSAGEM NO GRUPO 
if (!isCmd && isGroup && !info.key.fromMe) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女MENSAGEM NO GRUPO女⃟⃟女▬▭▬▭▬','blue'),'\n',
color('┃‣ ✨ᏀᎡႮᏢϴ :','blue'),color(groupName,'cyan'),'\n',
color('┃‣ ✨ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('┃‣ ✨ΝᏆᏟᏦ :','blue'),color(pushname,'cyan'),'\n',
color('┃‣ ✨MSG :','blue'),color(budy,'cyan'),'\n',
color('┃‣ ✨ᎻϴᎡᎪ :','blue'),color(hora,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','blue'),'\n')

//===========================================\\
//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return laura.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
laura.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
laura.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

        
//=====================
//
msg = {
espere:  `aguarde um pouquinho ${pushname}, que estou processando seu comando🥰😘`,
dono: "este comando so podera ser usado pelo meu dono",
grupo: "este comando so pode ser usado em grupo🫂",
private: "este comando so pode ser usado no privado",
premium: `[❗SEJA PREMIUM ❗] * se quiser saber como ser premium fale com meu dono ele te dará informações.*`,
adm: "este comando so pode ser usado por um adm🤣",
error: "ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
unico: "esse comando e apenas para usuários permitidos",
botadm: `@ ${botName} precisa ser adm xd🙄🙄`
}


//selos

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 

const loc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"locationMessage": {
"name": ' Laura_Privat',
}}}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' Laura_Privat ',
"jpegThumbnail": fs.readFileSync('./laura/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./laura/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": ` Laura_Privat `,
}}}


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
async function fetchJson (url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
              
//============(COMANDOS COM PREFIXO================\\


switch(comando) {

case 'jogodavelha':
if(!isGroup) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/cmdgrupo.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
joguinhodavelhajs.push(sender)
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./laura-Functions/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸??️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
laura.sendMessage(from, {text: chatMove}, {quoted: selo,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + comando} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./laura-Functions/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
laura.sendMessage(from, {text: strChat}, {quoted: selo,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./laura-Functions/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./laura-Functions/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./laura-Functions/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'fechamento': 
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
laura.sendMessage(from, { react: { text: `${emoji}`, key: info.key }})
enviar(` se você quer colocar um tempo para que seu grupo feche e abra automaticamente usse os seguintes comando.\n\n
╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
╰╮女⃟⃟女  FECHAMENTO PROGAMADO ❈⃟き
┃│● ⋟  ${emoji}${prefix}grupo30s (30 segundos)
┃│● ⋟  ${emoji}${prefix}grupo1m (1 minuto)
┃│● ⋟  ${emoji}${prefix}grupo2m (2 minutos)
┃│● ⋟  ${emoji}${prefix}grupo5m (5 minutos)
┃│● ⋟  ${emoji}${prefix}grupo10m (10 minutos)
┃│● ⋟  ${emoji}${prefix}grupo20m (20 minutos)
┃│● ⋟  ${emoji}${prefix}grupo30m (30 minutos)
┃│● ⋟  ${emoji}${prefix}grupo1h (1 hora)
┃│● ⋟  ${emoji}${prefix}grupo3h (3 hora)
┃│● ⋟  ${emoji}${prefix}grupo5h (5 horas)
┃│● ⋟  ${emoji}${prefix}grupo12h (12 horas)
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨


`)
break

case 'grupo30s':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(30000); //30 segundos 
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(60000); //1 Minuto
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo2m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por dois minutos.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(120000); //2 Minutos
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por cinco minutos.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(300000); //5 Minutos
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo10m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por dez minutos.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(600000); //10 Minutos 
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo20m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por vinte minutos.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(1200000); //20 Minutos
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo30m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por trinta minutos.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(13800000); //30 Minutos
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por uma hora.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(27600000); //1 Hora
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo3h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por três horas.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(82800000); //3 Horas
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por cinco horas.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(138000000); //30 segundos 
laura.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo12h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por doze horas.\n até a aqui a pouco`)
{
laura.groupSettingUpdate(from, "announcement")
await esperar(331200000); //12 Horas
laura.groupSettingUpdate(from, "not_announcement")
}
break
///antis cms
case 'antiporn':
                    try {
                        if (!isGroup) return reply(msg.grupo)
                        if (!isGroupAdmins) return reply(msg.adm)
                        if (!isBotGroupAdmins) return reply(msg.botasm)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiPorn) return reply('Ja esta ativo')
                            antiporn.push(from)
                            fs.writeFileSync('./dono/seguranca/antiporn.json', JSON.stringify(antiporn))
                            reply('Ativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiporn.splice(from, 1)
                            fs.writeFileSync('./dono/seguranca/antiporn.json', JSON.stringify(antiporn))
                            reply('Desativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msg.error)
                    }
                    break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./dono/seguranca/antilinkhard.json', JSON.stringify(antilinkhard))
reply('[🩸] Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./dono/seguranca/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
if(isAntiLinkHard){
buttons02 = [{buttonId: `${prefix + comando} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}]
} else {
buttons02 = [{buttonId: `${prefix + comando} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮\n         ????𝗧𝗜 𝗟𝗜𝗡𝗞\n╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ??•━━━━━╯`,
footer: `O anti link está ${isAntiLinkHard ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
laura.sendMessage(from, buttonMessage02, {quoted:selo})
}
break


case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('/dono/seguranca/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./dono/seguranca/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./dono/seguranca/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./dono/seguranca/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./dono/seguranca/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./dono/seguranca/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antisticker':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply('1 para ativar, 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('/dono/seguranca/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./dono/seguranca/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antiaudio':
            if (!isGroup) return reply(msg.grupo)
            if (!isGroupAdmins) return reply(msg.adm)
            if (!isBotGroupAdmins) return reply(msg.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiAudio) return reply('${emoji}Ja esta ativo${emoji}')
              antiaudio.push(from)
              fs.writeFileSync('./dono/seguranca/antiaudio.json', JSON.stringify(antiaudio))
              reply(`${emoji}Ativou com sucesso o recurso de anti audio neste grupo${emoji}`)
            } else if (Number(args[0]) === 0) {
              if (!isAntiAudio) return reply(`${emoji}Ja esta Desativado${emoji}`)
              antiaudio.splice(from, 1)
              fs.writeFileSync('./dono/seguranca/antiaudio.json', JSON.stringify(antiaudio))
              reply(`${emoji}Desativou com sucesso o recurso de anti audio neste grupo${emoji}`)
            } else {
              if (isAntiAudio) {
                buttons02 = [
                  { buttonId: `${prefix + comando} 0`, buttonText: { displayText: '[🌟] DESATIVAR [🌟]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + comando} 1`, buttonText: { displayText: '[,🌟] ATIVAR [🌟]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═──────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐀𝐔𝐃𝐈𝐎👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═──────═⌘═────═╯
  `,
                footer: `STATUS DO ANTI-AUDIO: AGORA ${isAntiAudio ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              laura.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break
  
case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + comando} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./laura-Functions/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./laura-Functions/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break                     
            
 case 'antivideo':
            if (!isGroup) return reply(msg.grupo)
            if (!isGroupAdmins) return reply(msg.adm)
            if (!isBotGroupAdmins) return reply(msg.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiVid) return reply(`Ja esta ativo${emoji}`)
              antivid.push(from)
              fs.writeFileSync('./dono/seguranca/antivideo.json', JSON.stringify(antivid))
              reply(`${emoji}Ativou com sucesso o recurso de anti video neste grupo✔${emoji}`)
            } else if (Number(args[0]) === 0) {
              if (!isAntiVid) return reply(`Ja esta Desativado`)
              antivid.splice(from, 1)
              fs.writeFileSync('./dono/seguranca/antivideo.json', JSON.stringify(antivid))
              reply(`${emoji}Desativou com sucesso o recurso de anti video neste grupo${emoji}`)
            } else {
              if (isAntiVid) {
                buttons02 = [
                  { buttonId: `${prefix + comando} 0`, buttonText: { displayText: `[${emoji}] DESATIVAR [${emoji}]` }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + comando} 1`, buttonText: { displayText: `[${emoji}] ATIVAR [${emoji}]` }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐕𝐈𝐃𝐄𝐎 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯ `,
                footer: `STATUS DO ANTIVIDEO AGORA: ${isAntiVid ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              laura.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break
                       

case 'antiimg':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply(`Hmmmm`)
if (Number(args[0]) === 1) {
if (isAntiImg) return reply(`Já Esta ativo`)
antiimg.push(from)
fs.writeFileSync('./dono/seguranca/antiimg.json', JSON.stringify(antiimg))
reply(`${emoji}Ativou com sucesso o recurso de anti imagem neste grupo✔️${emoji}`)
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply(`${emoji}Ja esta Desativado.${emoji}`)
antiimg.splice(from, 1)
fs.writeFileSync('/dono/seguranca/antiimg.json', JSON.stringify(antiimg))
reply(`${emoji}Desativou com sucesso o recurso de anti imagem neste grupo✔️${emoji}`)
} else {
reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
}
break


case 'antifake':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply(`${emoji}1 pra ligar / 0 pra desligar${emoji}`)
if (Number(args[0]) === 1) {
if (isAntifake) return reply(`${emoji}Ja esta ativo${emoji}`)
antifake.push(from)
fs.writeFileSync('./dono/seguranca/antifake.json', JSON.stringify(antifake))
reply(`${emoji}Ativou com sucesso o recurso de antifake neste grupo ${emoji}`)
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply(`${emoji}Ja esta Desativado${emoji}`)
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./dono/seguranca/antifake.json', JSON.stringify(antifake))
reply(`${emoji}‼️ Desativou com sucesso o recurso de antifake neste grupo✔️${emoji}`)
} else {
reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
}
break



case 'antilink':
if (!info.key.fromMe && !isCreator) return reply(`VC PRECISA SER ADM XD🙄`)
if (!info.key.fromMe && !isCreator) return reply(`O BOT PRECISA SER ADM XD🙄`)
					if (args.length < 1) return reply(`${emoji}digite 1 para ativar ou 0 para desativar${emoji}`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(`${emoji}o anti-link está ativo${emoji}`)
						antilink.push(from)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi ativo no grupo ✔️${emoji}`)
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi desativado com sucesso neste grupo✔️${emoji}`)
					} else {
						reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
					}
					break

case 'antipv':
if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./dono/seguranca/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de anti privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Já está desativado')
fs.writeFileSync('./dono/seguranca/antipv.json', JSON.stringify([]))
reply('‼️ Desativou com sucesso o recurso De antipv ✔️')
} else {
if(isAntiPv){
buttons02 = [
{buttonId: `${prefix + comando} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + comando} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `
┠➥[👤] 𝗢??𝗔 𝗠𝗘𝗦𝗧𝗥𝗘: ${pushname}
┠➥[👥] 𝗚𝗥𝗨𝗣𝗢: ${groupName}
┠➥[💧] Quem Enviar Mensagens no PV
┠➥[💧] Sera Automaticamente Bloqueado.
╰─╼━━━══━━━━≺🔵≻━━━━══━━━╾─╯`,
footer: `status: ${isAntiPv ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}}
laura.sendMessage(from, buttonMessage02, {quoted:selo})
}
break					


case 'autofig-gp':
case 'autofig':
case 'autostick':
if (!isGroup) return reply(msg.grupo)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
if (args.length < 1) return reply('tipo autofig-gp 1 para ativar \ntipo autofig-gp 1 para desativar')
if (args[0]  === '1'){
if (isAutoSticker) return reply(`Já ativo`)
autosticker.push(from)
fs.writeFileSync('./laura-Functions/funções/autosticker.json', JSON.stringify(autosticker))
reply('autofig-gp ativo')
} else if (args[0] === '0'){
 anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./laura-Functions/funções/autosticker.json', JSON.stringify(autosticker))
reply('autofig-gp Desligado')
}
break

case 'autostickpv':
case 'autofig-geral':
if (args.length < 1) return reply('autofig-pv 1 para ativar \n autofig-pv 0 para desativar')
if (args[0]  === '1'){
if (isAutoStick) return reply(`Já ativo`)
autostick.push(from)
fs.writeFileSync('./laura-Functions/funções/autostickpc.json', JSON.stringify(autosticker))
reply('autofig-pv ativo')
} else if (args[0] === '0'){
anu = autosticker.indexOf(from)
autostick.splice(anu, 1)
fs.writeFileSync('./laura-Functions/funções/autostickpc.json', JSON.stringify(autosticker))
reply('Auto Sticker Ativo')
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!isCreator  && !m.key.fromMe) return reply(msg.dono)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./laura-Functions/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./laura-Functions/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break
///antis fim
					
case "infogp":
        // CincoFolhas
        if (!isGroup) return enviar(msg.grupo)
        if (!isBotGroupAdmins) return enviar(msg.botadm)
        enviar(`
         ꧁✟${donoName}✟꧂
 ╭▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬
 ┃➣nome:꧁${groupName}꧂
 ┃➣descrição:꧁${groupDesc}꧂
 ┃➣
 ┃➣
 ┃➣id:꧁${from}꧂
 ┃➣data:꧁${data}꧂
 ┃➣hora:꧁${hora}꧂
 ╰▬▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬
            ©*${botName}*-𝑩𝑶𝑻⃟ 
`)
        break

      case 'listadm':
        if (!isGroup) return enviar(msg.grupo)
        teks = `
                 ꧁✟${botName}✟꧂
 ╭▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬
 ┃➣aqui a lista de todos adms
 ┃➣grupo:꧁${groupMetadata.subject}}꧂
 ┃➣total:${groupAdmins.length}
 ┃➣ `
        no = 0
        for (let admon of groupAdmins) {
          no += 0
          teks += `
 ┃➣id:[${no.toString()}] ꧁@${admon.split('@')[0]}}꧂
`
        }
        mentions(teks, groupAdmins, true)
        break

// STICKER/FIGURINHAS \\
case 'f':
case 's':
(async function () {
reply(`Espera um pouquinho ai meu bom😊`)
var legenda = q ? q?.split("/")[0] : `
❄ solicitado por:
❄ feito por:
❄dono:
❄️grupo:
`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
${pushname}
${botName}
✟⃢⃟${donoName}⃢⃟✟
${groupMetadata.subject}
`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
laura.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
laura.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
break


case "grupo":
if (!isGroup) return reply(`Cmd somente em grupo`)
if (!isGroupAdmins) return reply(`Cmd somente para adm`)
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
if (args.length < 1) return reply(`
╔━━━━━━░CDM GRUPO░━━━━━━╗
  ❌⃟PARA FECHAR O GRUPO (${prefix}grupo f )ͦ⃟❌
  ✔️ )ͦ⃟PARA ABRIR O GRUPO (${prefix}grupo a )ͦ⃟✔️
╚━━━━━░${botName}░━━━━━━╝
`)
try {
if (q == "a"){
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await laura.groupSettingUpdate(from, "not_announcement")
reply(`✔️𝔾ℝ𝕌ℙ𝕆 𝔸𝔹𝔼ℝ𝕋𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆✔️\n${timed}\nDATA:${data}\nHORA:${hora}`)
}
if (q == "f") {
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.groupSettingUpdate(from, "announcement")
reply(`❌𝔾ℝ𝕌ℙ𝕆 𝔽𝔼ℂℍ𝔸𝔻𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆❌\n${timed}\nDATA:${data}\nHORA:${hora}`)
}
} catch(e) {
console.log(e)
reply(msg.error)
}
break

      case 'rename':
      case 'roubar':
        if (!isQuotedSticker) return reply('Marque uma figurinha...')
        encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
        var kls = q
        var pafck = kls.split("/")[0];
        var author2 = kls.split("/")[1];
        if (!q) return reply('*E o autor e o nome do pacote?*')
        if (!pafck) return reply(`*por favor escreve o formato certo: ${prefix + comando} pedrozz/laura_pack*`)
        if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + comando} pedrozz/laura_pack*`)
        bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pafck}`)
        var sti = new Buffer.from(mantap, 'base64');
        laura.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pafck}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
          .catch((err) => {
            reply(`❎ Error, tenta mais tarde`);
          })
        break
      
case "restartlink":
if (!isGroup) return reply(`CMD SOMENTE EM GRUPO XD`)
if (!isGroupAdmins) return reply(`CMD SOMENTE PARA ADM`)
if (!isBotGroupAdmins) return reply(`o bot tem q ser adm🙄`)
try {
await laura.groupRevokeInvite(from)
reply(`${emoji}Link de convite resetado com sucesso ${emoji}`)
} catch(e) {
console.log(e)
reply(`algo deu errado`)
}
break

case 'servip':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(mess.donosmt)
premium.push(`${numeroBot}@s.whatsapp.net`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto o bot foi adicionado na lista premium.`)
break

case 'servipdono':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return 
premium.push(`${donoNumher}@s.whatsapp.net`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto você foi adicionado na lista premium.`)
break

case 'addvip':
if (!isGroup) return reply(msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/cmddono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: `??@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
laura.sendMessage(from, {text: `??@${tedtp} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`, mentions: [mentioned]}, {quoted: info})
}
break


case 'limpeza':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins)
await laura.sendMessage(from, { react: { text: `🗑️`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: limpeza(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})

break


 

//⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘MENUS⫘⫘⫘⫘⫘⫘⫘⫘⫘


case 'menu':
reagir(`👻`)
await esperar(1000)
reagir(`✔️`)
await esperar(1000)

laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: menu(comando, prefix, pushname),
contextInfo: {
externalAdReply: {
            title:"🍷seja bem vindo ao menu🍷",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/9efab23a22af2d7ffe3ff.jpg`,
            sourceUrl: `https://instagram.com/pedrozz_13755`, 
            mediaType: 2
            }}})

break

case 'menudono':
if(!isCreator) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/cmddono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await laura.sendMessage(from, { react: { text: `😍`, key: info.key }})
await laura.sendMessage(from, { react: { text: `👻`, key: info.key }})
await laura.sendMessage(from, { react: { text: `👾`, key: info.key }})
escrever(`o menu do dono esta na paste de menu normal!`)
break

case 'menux':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menux.jpg'),
caption: menux(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/laura1.webp'), caption: "Legenda" })

break

case 'menuvip':
if(!isPremium) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/apenas nobres.mp3'), mimetype: "audio/mpeg",},{quoted: info})
await laura.sendMessage(from, { react: { text: `👑`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/vip.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌

╭▬▭▬ ▬▭▬⪩女⃟⃟女MENU VIP女⃟⃟女▬▭▬▬▭▬▬▭▬
╰╮
┃│● ⋟ ${emoji}${prefix}menudowl
┃│● ⋟ ${emoji}${prefix}menu18
┃│● ⋟ ${emoji}${prefix}onlyfans
┃│● ⋟ ${emoji}${prefix}menux
┃│● ⋟ ${emoji}${prefix}efeitos
┃│● ⋟ ${emoji}${prefix}musicas
┃│● ⋟ ${emoji}${prefix}tabela
┃│● ⋟ ${emoji}${prefix}alteradores
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨

EM PREVÊ TERÁ MAIS CMDS


OBS: SÃO MENUS ENTÃO TEM MAIS CMD DOQ PARECE.

©*${botName}*-𝑩𝑶𝑻⃟ 

            `            
           await laura.sendMessage(from, {image: fs.readFileSync('./laura/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"👑𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/61eabe673ecf354d643d1.jpg`,
            sourceUrl: `https://instagram.com/pedrozz_13755`, 
            mediaType: 2
            }}})
             
            
            break

case 'menudowl':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: app(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menuadm':
if(!isGroupAdmins) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/ndigno.mp3'), mimetype: "audio/mpeg",},{quoted: info})
 audiocriador = await fs.readFileSync("./laura/audio/menuadm.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
await laura.sendMessage(from, { react: { text: `🥵`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menuadm.jpg'),
caption: menuadm(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break


case 'animes':
await laura.sendMessage(from, { react: { text: `🤭`, key: info.key }})
await laura.sendMessage(from, { react: { text: `😥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💙`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/animes.jpg'),
caption: animes(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'sounds':
await laura.sendMessage(from, { react: { text: `🎶`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔊`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menumu.jpg'),
caption: sound(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menu18":
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/menu18.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
templateMassage = {
image: {url:"./laura/image/menux.jpg",
quoted: info},
caption: menu18(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
laura.sendMessage(from, templateMassage)
break

case 'efeitos':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `👻`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🍪`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menualteradores.jpg'),
caption: efeitos(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'musicas':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🎶`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔊`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menumu.jpg'),
caption: musica(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'tabela':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `👌`, key: info.key}})
laura.sendMessage(from, {image: fs.readFileSync('./laura/image/tabela.jpg'), caption: tabela(comando, prefix, pushname),gifPlayback: true},
{queted: info})

break

case 'onlyfans':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menux.jpg'),
caption: only(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/laura1.webp'), caption: "Legenda" })

break

case 'alteradores':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `👌`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menualteradores.jpg'),
caption: alteradores(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})

break

//⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘


case 'boss':
await laura.sendMessage(from, { react: { text: `☠️`, key: info.key}})
laura.sendMessage(from, {image: fs.readFileSync('./laura/image/tabela.jpg'), caption: boss(comando, prefix, pushname),gifPlayback: true},
{queted: info})

break

case 'morte':   
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/morrer.mp3'), mimetype: "audio/mpeg",},{quoted: info})
morrer1 = `${Math.floor(Math.random() * 31)}`
morrer2 = `${Math.floor(Math.random() * 9)}`
var ano = ("2")
ano1 = `${Math.floor(Math.random() * 300)}`
morrer = `${morrer1}.${morrer2}.${ano}${ano1}`
pedrozz = `╭┉┈┈┈─━┅┄┅━┅┄┅━──━┅┄┅━┅┄┅━┈┈┈┈•

ི⋮ ྀ${emoji}⏝ ི⋮ ྀDATA DA SUA MORTEི⋮ ྀ⏝${emoji}⋮ ྀ
        ╔━━━━━━░🌟░━━━━━━╗
       ➤➤✨⃟HELLO:${pushname}ͦ⃟✨
       ➤➤✨⃟DATA:${morrer1}/0${morrer2}/${ano}${ano1}ͦ⃟✨
       ➤➤✨⃟Sinto muito ${pushname}ͦ⃟✨
        ╚━━━━━━░🌟░━━━━━━╝
     ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ

    •┈┈┈━┅┄┅━┅┄┅━───┈━┅┄┅━┅┄┅━┈┈┈┅╯
           ꧁⃟✨By pedrozz✨⃟꧂`
reply(pedrozz)

break


case 'google': {
await laura.sendMessage(from, { react: { text: `🔍`, key: info.key}})
            if (!q) return reply(`Examplo : ${prefix}Google bot de WhatsApp`)
            reply("aguarde um momento ")
            let google = require('google-it')
            google({ 'query': q }).then(res => {
              let teks = `Google Pesquisa \n\n`
              for (let g of res) {
                teks += `⭔ *Titulo* : ${g.title}\n`
                teks += `⭔ *Descrição* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
              }
              reply(teks)
            })
          }
            break
            
            

case 'reset':
laura.sendMessage(from,{text: `A ${botName} sera reiniciado em segundos, então espere um pouquinho ai ${pushname}`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'calunia':
teks = args.join(" ");
var alvoNumber;
if (info.message.extendedTextMessage) {
  alvoNumber = info.message.extendedTextMessage.contextInfo.participant;
} else if (info.message.extendedTextMessage == null){
if (!teks) return enviar(`Marque a mensagem de alguém ou digite o seguinte comando:\n${prefix + comando} eu sou gay/eu já sabia/18996998971\n\n*OBS:* o número tem que está no mesmo formato do whatsapp`);
var numbAlv = teks.split("/")[2];
numbAlvs = numbAlv.split("+55").join("").split("-").join("").split(" ").join("");
alvoNumber = "+55" + numbAlvs + "@s.whatsapp.net";
}
var alvo = teks.split("/")[0];
var bot = teks.split("/")[1];
const annônimo = {
key: { fromMe: false, participant: alvoNumber},
message: { 
"extendedTextMessage": {
"text": alvo
}
} 
};
laura.sendMessage(from, {text: bot}, {quoted: annônimo});
break


case 'comandos':
enviar(`existe um total de ${comandos} comandos\n\n
╔━⊱ *「🌹」*━━✕
┃ §§ ${botName} §§∆•
┗━━━━━━━━━━━━✕`)
break
case 'j':
await laura.sendMessage(from, { react: { text: `☢️`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔰`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🤑`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🥴`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💎`, key: info.key }})
enviar(` test `)
break
break


case 'report':
case 'bug':
{
reagir(`💦`)
await esperar(1000)
reagir(`⚡`)
await esperar(1000)
reagir(`🌟`)
await esperar(1000)
reagir(`✨`)
await esperar(1000)
reagir(`💥`)
await esperar(1000)
reagir(`✔️`)
await esperar(1000)
}
if (!q) return escrever('Exemplo: ∆report bug no comando de desenhos, por favor fale somente o nome do comando que esta com bug, obrigado😘.')
audiocriador = await fs.readFileSync("./laura/audio/Bugada.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
reply(`${pushname} Obrigado pelo feedback 😘, o bug foi reportado ao meu criador...\n\n
<😠>bugs falsos não serão respondidos
𒆕𒄬𒆕𒄬  ⟬𖤐⁩᭄ꦿPedrozz agradeçe⛤⃗͜ᬏ᭄  ⟭𒆕𒄬𒆕𒄬`)
let templateMesssage = {
image: {url: './laura/image/bug.jpg',
quoted: info},
caption: `💥𝗨𝗺 𝗕𝘂𝗴💥\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'pedrozz'
}
laura.sendMessage("556199317165@s.whatsapp.net",templateMesssage)
break
//case download
//by pedrozz
case 'gta':
if(!isPremium) return reply(msg.premium)
enviar(`
APK+OBB: https://www.mediafire.com/file_premium/s2jya7uspaqs89w/GTA-San-Andreas-Mod-Cleo-v2.10_TopJogos.zip/file`)
break

case 'minecraft':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/xbn58e7hjek9jlq/MCPE_1.18.12_By-NEV3X.apk/file`)
break

case 'nba':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/1c3eiw6tubwp5jn/NBA+App_v12.0407.apk/file`)
break

case 'bully':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/32g7l9kst7wdkr2/bully_anniversary_edition.apk/file`)
break

case 'darkflix':

enviar(`https://www.mediafire.com/file/l2743qj95c07mi3/Darkflix_v1.4.9_apkpure.com.apk/file`)
break

case 'seguidorista':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/x1vwyw9x9k8ltzi/Followers_Pro_for_Instagram_v1.0.0.apk/file`)
break

case 'anime':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/q6rxxb3zxap2kko/X-Animes+1.15.24+MOD_TekMods.com.apk/file`)
break

case 'porhubmod':
if(!isPremium) return reply(msg.premium)
enviar(`http://www.mediafire.com/file/hcez1zkva44poph/phb-meljedroid.apk/file`)
break

case 'kinemasterpro':
if(!isPremium) return reply(msg.premium)
enviar(`https://www.mediafire.com/file/iynbbdp9gf63rxs/KineMaster_4.16.4+-+bydortontutoriais.apk/file`)
break

case 'pixellabmod':
if(!isPremium) return reply(msg.premium)
enviar(`http://www.mediafire.com/file/pfe8lhc72n11z72/Pixellab+New+Mods+Aditya+Project.zip/file`)
break
//fimdos download 
//menu animes
//cases by pedrozz
case '7pecados':
enviar(`

► NANATSU NO TAZAI

temporada 1 https://animesonlinehd.vip/os-sete-pecados-capitais-dublado/
temporada 2 https://animesonlinehd.vip/nanatsu-no-taizai-sete-pecados-capitais-2-temporada-dublado/
https://animesonlinehd.vip/nanatsu-no-taizai-fundo-no-shinpan-dublado/
https://animesonlinehd.vip/nanatsu-no-taizai-kamigami-no-gekirin-dublado/
`)
break
case 'naruto':
enviar(
`► NARUTO

https://animesonlinehd.vip/naruto/ (legendado)
►https://www.animescomix.com/anime/60/
`)
break
case 'dragonball':
enviar(
`► DRAGON BALL SUPER

https://animesonlinehd.vip/dragon-ball-super-dublado-onlin/
https://animesmania.com/anime/dragon-ball-super-dublado
`)
break
case 'demonslayer':
enviar(`
► DEMON SLAYER

https://animesonlinehd.vip/kimetsu-no-yaiba-mugen-resshahen-dublado/
►https://subanimes.biz/episodio/22980/
https://animesonlinehd.vip/kimetsu-no-yaiba-yuukakuhen-dublado/
`)
break
//fim dos animes

case 'alugar': {
  laura.sendMessage(from, {react: {text: `👻`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🍪`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `💙`, key: info.key}})
JsonW = [
"https://telegra.ph/file/aa1b07a2be9ac2ef8bcd4.jpg",
"https://telegra.ph/file/2a2921a3758f4136781c5.jpg",
"https://telegra.ph/file/5479f90c4c05aefe92a91.jpg",
"https://telegra.ph/file/f923c5ac13dbf68585e6d.jpg",
"https://telegra.ph/file/fb77a528099fe1a69206b.jpg"

]
random = JsonW[Math.floor(Math.random() * JsonW.length)]
chama_imagem = {
image: {url: random},
caption: `╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ         🤑𝐀𝐥𝐮𝐠𝐚𝐫🤑                  ║
╚┉┉═══『${botName}』═══┉┉╝    
🤑R$ 10,00 semanal
🤑R$ 20,00 quinzenal
🤑R$ 26,50 mensal
╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ     🔥𝐂𝐎𝐌𝐏𝐑𝐀𝐑🔥              ║
╚┉┉═══『${botName}』═══┉┉╝    
🔥R$ 80,00 ${botName}
╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ     ✅𝐂𝐎𝐌𝐏𝐑𝐀𝐑✅              ║
╚┉┉═══『${botName}』═══┉┉╝    
✅Sistemas
✅jogos
✅comandos

_Entre em contato com  Pedrozz  para obter qualquer produto_
😎: wa.me/556199317165`
}
laura.sendMessage(from, chama_imagem)
} 
break              


case 'an':
reply(`░░░░░░░░░░░░░░░░░░░░░
░░░▄█▀█▄█▀█▄▄▄░░░░░░░
░░█▒░░▀█▄▄░░░▀▀█░░░░░
░█▒░░░░░▒░░░░▒▄░▀▀█▄░
░█▒░░░░█▒░░▄▀░░░▒░░█░
░█▒░░░█▒░░█▀▒░░█▀░░▀█
░█▒░░░█▒░░█▒░░█▓░░░▓█
▄▀█▓▓░█▒░▓█▓░░█▓░░▓▄█
█▒▒████▄▓▓█▓░░█▓░░▄█░
█▒▒░░░░░▀█▄▀░▄▀▓▄█▀░░
█▒▓▓▓█▀▀▄▀█▄▄▀▄▄▀░░░░
░▀▄▄▄█▄▄▀░░░░░░░░░░░░`)

break

//===========(CMD DE FIGURINHAS)=========\\
case 'figurinhas':
if (!q) return reply("Insira a qnd de figu que deja que eu envie")
if (!Number(args[0]) || Number(q.trim()) > 25) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 25..")
reply('Ja estarei te enviando😘\n❗ LEMBRANDO PÔDE TER FIGURINHAS +18❗\n\n*por favor não floda o cmd*')
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
laura.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
figuss()
}
break
case 'fotobot':
if (!isCreator && !info.key.fromMe) return reply(`so meu dono pode usar esse comando`)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await laura.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil amor vlw')
break

case 'steve':
reply(`🏿🏿🏿🏿🏿🏿🏿🏿
🏿🏿🏿🏿🏿🏿🏿🏿
🏿🏿🏽🏽🏽🏽🏿🏿
🏽🏽🏽🏽🏽🏽🏽🏽
🏽⬜⬛🏽🏽⬛⬜🏽
🏽🏽🏽🏿🏿🏽🏽🏽
🏽🏽🏿🏽🏽🏿🏽🏽
🏽🏽🏿🏿🏿🏿🏽🏽`)
break
case 'test1':
if(!isPremium) return reply(msg.premium)
enviar(`oi usuário vip`)
break
case 'desenhos':

audiocriador = await fs.readFileSync("./laura/audio/desenhos.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await laura.sendMessage(from, { react: { text: `🥰`, key: info.key }})
reply(`
 ╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
╰╮女⃟⃟女 INFORMAÇÕES DO BOT ❈⃟き
╭┤● ⋟ ${emoji}Bot: ${botName}
┃│● ⋟ ${emoji}nick: ${pushName}
┃│● ⋟ ${emoji}Versão: 1.0.0
┃│● ⋟ ${emoji}Web:〘chorome〙
┃│● ⋟ ${emoji}hora: ${hora}
┃│● ⋟ ${emoji}data: ${data}
┃│● ⋟ ${emoji}criador: ${criador}
┃│● ⋟ ${emoji}totalcmd: ${comandos}
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨
╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
│⏤͟͟͞͞👾${prefix}mario
│⏤͟͟͞͞👾${prefix}heli
│⏤͟͟͞͞👾${prefix}android
│⏤͟͟͞͞👾${prefix}an
│⏤͟͟͞͞👾${prefix}sexy
│⏤͟͟͞͞👾${prefix}love
│⏤͟͟͞͞👾${prefix}love2
│⏤͟͟͞͞👾${prefix}love3
│⏤͟͟͞͞👾${prefix}love4
│⏤͟͟͞͞👾${prefix}love5
│⏤͟͟͞͞👾${prefix}love6
│⏤͟͟͞͞👾${prefix}love7
│⏤͟͟͞͞👾${prefix}steve
│⏤͟͟͞͞👾${prefix}colaçao
│⏤͟͟͞͞👾${prefix}colaçao2
│⏤͟͟͞͞👾${prefix}cueio
│⏤͟͟͞͞👾${prefix}cat
│⏤͟͟͞͞👾${prefix}cat2
│⏤͟͟͞͞👾${prefix}777
│⏤͟͟͞͞👾${prefix}espadafds
│⏤͟͟͞͞👾${prefix}minhocal
│⏤͟͟͞͞👾${prefix}caminhao
│⏤͟͟͞͞👾${prefix}cat
│⏤͟͟͞͞👾${prefix}homer
│⏤͟͟͞͞👾${prefix}playboy
│⏤͟͟͞͞👾${prefix}pig
│⏤͟͟͞͞👾${prefix}hack
│⏤͟͟͞͞👾${prefix}violao
│⏤͟͟͞͞👾${prefix}lvm
│⏤͟͟͞͞👾${prefix}sherek
│⏤͟͟͞͞👾${prefix}predio
│⏤͟͟͞͞👾${prefix}casa
│⏤͟͟͞͞👾${prefix}felizntl
│⏤͟͟͞͞👾${prefix}boneconeve
│⏤͟͟͞͞👾${prefix}noel
│⏤͟͟͞͞👾${prefix}noel2
│⏤͟͟͞͞👾${prefix}arvorentl
│⏤͟͟͞͞👾${prefix}boneconeve2
│⏤͟͟͞͞👾${prefix}esqueleto
│⏤͟͟͞͞👾${prefix}loliq
│⏤͟͟͞͞👾${prefix}girl
│⏤͟͟͞͞👾${prefix}morena
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨`)
break
case 'love7':
enviar(`
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
 I Love U ❤
  I Love U ❤
   I Love U ❤
    I Love U ❤
     I Love U ❤
      I Love U ❤
       I Love U ❤
        I Love U ❤
         I Love U ❤
          I Love U ❤
           I Love U ❤
            I Love U ❤
             I Love U ❤
              I Love U ❤
               I Love U ❤
                I Love U ❤
                 I Love U ❤
                  I Love U ❤
                   I Love U ❤
                    I Love U ❤
                    I Love U ❤
                   I Love U ❤
                  I Love U ❤
                 I Love U ❤
                I Love U ❤
               I Love U ❤
              I Love U ❤
             I Love U ❤
            I Love U ❤
           I Love U ❤
          I Love U ❤
         I Love U ❤
        I Love U ❤
       I Love U ❤
      I Love U ❤
     I Love U ❤
    I Love U ❤
   I Love U ❤
  I Love U ❤
 I Love U ❤
I Love U ❤
I Love U ❤
 I Love U ❤
  I Love U ❤
   I Love U ❤
    I Love U ❤
     I Love U ❤
      I Love U ❤
       I Love U ❤
        I Love U ❤
         I Love U ❤
          I Love U ❤
           I Love U ❤
            I Love U ❤
             I Love U ❤
              I Love U ❤
               I Love U ❤
                I Love U ❤
                 I Love U ❤
                  I Love U ❤
                   I Love U ❤
                    I Love U ❤
                    I Love U ❤
                   I Love U ❤
                  I Love U ❤
                 I Love U ❤
                I Love U ❤
               I Love U ❤
              I Love U ❤
             I Love U ❤
            I Love U ❤
           I Love U ❤
          I Love U ❤
         I Love U ❤
        I Love U ❤
       I Love U ❤
      I Love U ❤
     I Love U ❤
    I Love U ❤
   I Love U ❤
  I Love U ❤
 I Love U ❤
I Love U ❤
I Love U ❤
I Love U  ❤
I Love U   ❤
I Love U    ❤
I Love U     ❤
I Love U      ❤
I Love U       ❤
I Love U        ❤
I Love U         ❤
I Love  U         ❤
I Love   U         ❤
I Love    U         ❤
I Love     U         ❤
I Love      U         ❤
I Love       U         ❤
I Love        U         ❤
I Love         U         ❤
I Lov e         U         ❤
I Lov  e         U         ❤
I Lov   e         U         ❤
I Lov    e         U         ❤
I Lo v    e         U         ❤
I Lo  v    e         U         ❤
I Lo   v    e         U         ❤
I Lo    v    e         U         ❤
I L o    v    e         U         ❤
I L  o    v    e         U         ❤
I L   o    v    e         U         ❤
I L    o    v    e         U         ❤
I  L    o    v    e         U         ❤
I   L    o    v    e         U         ❤
I    L    o    v    e         U         ❤
I     L    o    v    e         U         ❤
I      L    o    v    e         U         ❤
I       L    o    v    e         U         ❤
I        L    o    v    e         U         ❤
I         L    o    v    e         U         ❤
 I         L    o    v    e         U         ❤
  I         L    o    v    e         U         ❤
   I         L    o    v    e         U         ❤
    I         L    o    v    e         U         ❤
     I         L    o    v    e         U        ❤
      I         L    o    v    e         U       ❤
       I         L    o    v    e         U      ❤
        I         L    o    v    e         U     ❤
         I         L    o    v    e         U    ❤
          I         L    o    v    e         U   ❤
           I         L    o    v    e         U  ❤
            I         L    o    v    e         U ❤
             I         L    o    v    e         U❤
              I         L    o    v    e        U❤
               I         L    o    v    e       U❤
                I         L    o    v    e      U❤
                 I         L    o    v    e     U❤
                  I         L    o    v    e    U❤
                   I         L    o    v    e   U❤
                    I         L    o    v    e  U❤
                     I         L    o    v    e U❤
                      I         L    o    v    eU❤
                       I         L    o    v   eU❤
                        I         L    o    v  eU❤
                         I         L    o    v eU❤
                          I         L    o    veU❤
                           I         L    o   veU❤
                            I         L    o  veU❤
                             I         L    o veU❤
                              I         L    oveU❤
                               I         L   oveU❤
                                I         L  oveU❤
                                 I         L oveU❤
                                  I         LoveU❤
                                   I        LoveU❤
                                    I       LoveU❤
                                     I      LoveU❤
                                      I     LoveU❤
                                       I    LoveU❤
                                        I   LoveU❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                       I Lo v e U ❤
                                      I Lo  v  e U ❤
                                     I Lo   v   e U ❤
                                    I Lo    v    e U ❤
                                   I Lo     v     e U ❤
                                  I Lo      v      e U ❤
                                 I Lo       v       e U ❤
                                I Lo        v        e U ❤
                               I Lo         v         e U ❤
                              I Lo          v          e U ❤
                              I Lo         v           e U ❤
                              I Lo        v            e U ❤
                              I Lo       v             e U ❤
                              I Lo        v            e U ❤
                              I Lo         v           e U ❤
                              I Lo          v          e U ❤
                              I Lo           v         e U ❤
                              I Lo            v        e U ❤
                              I Lo             v       e U ❤
                              I Lo            v        e U ❤
                              I Lo           v         e U ❤
                              I Lo          v          e U ❤
                              I Lo         v           e U ❤
                              I Lo        v            e U ❤
                              I Lo       v             e U ❤
                              I Lo        v            e U ❤
                              I Lo         v           e U ❤
                              I Lo          v          e U ❤
                              I Lo           v         e U ❤
                              I Lo            v        e U ❤
                              I Lo             v       e U ❤
                              I Lo            v        e U ❤
                              I Lo           v         e U ❤
                              I Lo          v          e U ❤
                               I Lo         v         e U ❤
                                I Lo        v        e U ❤
                                 I Lo       v       e U ❤
                                  I Lo      v      e U ❤
                                   I Lo     v     e U ❤
                                    I Lo    v    e U ❤
                                     I Lo   v   e U ❤
                                      I Lo  v  e U ❤
                                       I Lo v e U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                        I Love U ❤
                                       I Love U ❤
                                      I Love U ❤
                                     I Love U ❤
                                    I Love U ❤
                                   I Love U ❤
                                  I Love U ❤
                                 I Love U ❤
                                I Love U ❤
                               I Love U ❤
                              I Love U ❤
                             I Love U ❤
                            I Love U ❤
                           I Love U ❤
                          I Love U ❤
                         I Love U ❤
                        I Love U ❤
                       I Love U ❤
                      I Love U ❤
                     I Love U ❤
                    I Love U ❤
                   I Love U ❤
                  I Love U ❤
                 I Love U ❤
                I Love U ❤
               I Love U ❤
              I Love U ❤
             I Love U ❤
            I Love U ❤
           I Love U ❤
          I Love U ❤
         I Love U ❤
        I Love U ❤
       I Love U ❤
      I Love U ❤
     I Love U ❤
    I Love U ❤
   I Love U ❤
  I Love U ❤
 I Love U ❤
I Love U ❤
 I Love U ❤
  I Love U ❤
   I Love U ❤
    I Love U ❤
     I Love U ❤
    I  Love U ❤
   I   Love U ❤
  I    Love U ❤
 I     Love U ❤
I      Love U ❤
I      Love U ❤
I      Love U ❤
I      Love U ❤
I      Love U ❤
I      Love U ❤
I     L ove U ❤
I    L  ove U ❤
I   L   ove U ❤
I  L    ove U ❤
I L     ove U ❤
I L    o ve U ❤
I L   o  ve U ❤
I L  o   ve U ❤
I L o    ve U ❤
I Lo     ve U ❤
I Lo    v e U ❤
I Lo   v  e U ❤
I Lo  v   e U ❤
I Lo v    e U ❤
I Lov     e U ❤
I Lov    e  U ❤
I Lov   e   U ❤
I Lov  e    U ❤
I Lov e     U ❤
I Love      U ❤
I Love      U ❤
I Love      U ❤
I Love      U ❤
I Love      U ❤
I Love      U ❤
I Love     U  ❤
I Love    U   ❤
I Love   U    ❤
I Love  U     ❤
I Love U      ❤
I Love U      ❤
I Love U      ❤
I Love U      ❤
I Love U      ❤
I Love U      ❤
I Love U     ❤ 
I Love U    ❤  
I Love U   ❤   
I Love U  ❤    
I Love U ❤     
I Love U ❤
❤I Love U 
 ❤I Love U
U ❤I Love 
 U ❤I Love
e U ❤I Lov
ve U ❤I Lo
ove U ❤I L
Love U ❤I 
 Love U ❤I
I Love U ❤
❤I Love U 
 ❤I Love U
U ❤I Love 
 U ❤I Love
e U ❤I Lov
ve U ❤I Lo
ove U ❤I L
Love U ❤I 
 Love U ❤I
I Love U ❤
❤I Love U 
 ❤I Love U
U ❤I Love 
 U ❤I Love
e U ❤I Lov
ve U ❤I Lo
ove U ❤I L
Love U ❤I 
 Love U ❤I
I Love U ❤
I Love U ❤
 I Love U ❤
  I Love U ❤
   I Love U ❤
    I Love U ❤
     I Love U ❤
      I Love U ❤
       I Love U ❤
        I Love U ❤
         I Love U ❤
          I Love U ❤
         I Lov  e U ❤
        I Lov    e U ❤
       I Lov      e U ❤
      I Lov        e U ❤
     I Lov          e U ❤
    I Lov            e U ❤
   I Lov              e U ❤
  I Lov                e U ❤
 I Lov                  e U ❤
I Lov                    e U ❤
 I Lov                  e U ❤
  I Lov                e U ❤
   I Lov              e U ❤
    I Lov            e U ❤
     I Lov          e U ❤
      I Lov        e U ❤
       I Lov      e U ❤
        I Lov    e U ❤
         I Lov  e U ❤
          I Love U ❤
           I Loe U ❤
            I Le U ❤
             I e U ❤
              Ie U ❤
               e U ❤
              e U ❤v
             e U ❤ov
            e U ❤Lov
           e U ❤ Lov
          e U ❤I Lov
         e U ❤  I Lov
        e U ❤    I Lov
       e U ❤      I Lov
      e U ❤        I Lov
     e U ❤          I Lov
    e U ❤            I Lov
   e U ❤              I Lov
  e U ❤                I Lov
 e U ❤                  I Lov
e U ❤                    I Lov
 e U ❤                  I Lov
  e U ❤                I Lov
   e U ❤              I Lov
    e U ❤            I Lov
     e U ❤          I Lov
      e U ❤        I Lov
       e U ❤      I Lov
        e U ❤    I Lov
         e U ❤  I Lov
          e U ❤I Lov
           e U I Lov
            e UI Lov
             e I Lov
              eI Lov
               I Lov
              I Lov❤
             I Lov ❤
            I LovU ❤
           I Lov U ❤
          I Love U ❤
         I Lov  e U ❤
        I Lov    e U ❤
       I Lov      e U ❤
      I Lov        e U ❤
     I Lov          e U ❤
    I Lov            e U ❤
   I Lov              e U ❤
  I Lov                e U ❤
 I Lov                  e U ❤
I Lov                    e U ❤
 I Lov                  e U ❤
  I Lov                e U ❤
   I Lov              e U ❤
    I Lov            e U ❤
     I Lov          e U ❤
      I Lov        e U ❤
       I Lov      e U ❤
        I Lov    e U ❤
         I Lov  e U ❤
          I Love U ❤
           I Loe U ❤
            I Le U ❤
             I e U ❤
              Ie U ❤
               e U ❤
              e U ❤v
             e U ❤ov
            e U ❤Lov
           e U ❤ Lov
          e U ❤I Lov
         e U ❤  I Lov
        e U ❤    I Lov
       e U ❤      I Lov
      e U ❤        I Lov
     e U ❤          I Lov
    e U ❤            I Lov
   e U ❤              I Lov
  e U ❤                I Lov
 e U ❤                  I Lov
e U ❤                    I Lov
 e U ❤                  I Lov
  e U ❤                I Lov
   e U ❤              I Lov
    e U ❤            I Lov
     e U ❤          I Lov
      e U ❤        I Lov
       e U ❤      I Lov
        e U ❤    I Lov
         e U ❤  I Lov
          e U ❤I Lov
           e U I Lov
            e UI Lov
             e I Lov
              eI Lov
               I Lov
              I Lov❤
             I Lov ❤
            I LovU ❤
           I Lov U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
          I Love U ❤
         I Love U ❤
        I Love U ❤
       I Love U ❤
      I Love U ❤
     I Love U ❤
    I Love U ❤
   I Love U ❤
  I Love U ❤
 I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
I Love U ❤
`)
break
case 'loliq':
enviar(`⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄ ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄ ⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄ ⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄ ⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰ ⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗ ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄ ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄ ⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄ ⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄ ⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴ ⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿`)
break
case 'girl':
enviar(` … … … … … … … … ,,—-~~”’¯¯¯¯¯¯”’~~—-,,
… … … … … …,,-~”¯::::::::::::::::::::::::::::::::::¯”’~,,
… … … … ..,,~”::::::::::::::::::::::::::::::::::::::::::::::::::::”~,,
… … … ..,,-“:::::::::::::::/::::::/::::::::::::::::\::::::::::::\:::::::::\
… … …,-“:::::,-“:::/:::::/::::::/:|::::::::::::::::\::::::::::::\:::::::::\
… … .,-“:::::::/:::::|:::::|:::::::|:|:::::::|:::::::\\:::::::::::|:|:::::\::\
… … /::::::/:::|::::::|:::::|::|::::\:\:::::/\::::/:::||:::::::::|:/::::::|:::|
… …/::::::|:::::\::::::\::::\::\::::/\:\,::/::\::/::::|:|:::::::/\/::::::/::::|
… ../::::::/::::::’\::::::\-,:::\/\::/: :\-,”/ : :\/:\:::/: |:::::/::/::::::|::::/
… ./::::::|:::::::::\::::::\|::/: \/: : : \/: : : : : \,/: \/::_/\//:\:::::/:::/
… /::::::/::/:::::::|::/,__/:/: :__/ . .: : : : : : :\__. \/: \:::::/::/:::/
… |:::|::::::::::::/::/::::/;/ ;/ ,. .,\: : : : : : : / ,._., \ /::::::|::/:|
…|:::/:::/::::::::/::/|:::|.\: |.|❤||; : : : : : :|.|.❤||;|::|:::\/:/
…|::|:::|::::::::/:::\|:::’\,|: \.”‘” /: : : : : : : :’\.” ‘”/ : \: |:::|::\
…|::|:::|:::::::/:::::|::::|/: : “¯’: : : : : : : : : :”¯” : : :\ : :/::::’\
…|::|:::|::::::/:::::/:::::’\: : : : : : : : : : : : : : :’: : : : 😐 :/::::::|
… \:|:::|:::::|::::::|::::::|,: : : : : : :~,___,~: : : : : :,-“:::::::|::|
… .’\|::|:::::|::::::||::::::\’~,: : : : : : ‘~–~’: : : : ,,~”\:::::::::|:/
… …’\:|:::::|::::::/.|::::::|: : “~,: : : : : : : : ,,-~,”::::::’\::::::::/
… … .\\:::::|”~,/-,|:::::::|: : : : ¯”~,-,,,-~”:::,,-‘\::::::::\-,,_::|/
… … ..’,\,::|~–‘-~\:::::::|: : : : : : |::|,,-~”¯..__\::::::::\… .’|
… ..,~”’: : \|: : : : : \::::::|: : : : : : |¯”’~~”~,”,: : \:::::::|.. /
..,-“: : : : : :|: : : : : :\::::::|: : : : : : \: : : : : : “~’-,:\::::::|\,
..|: : : : : : : |: : : : : : |::::|,\,: : : : : : : : : : : : : :”-,-\::::|: \
..| : : : : : : : : : : : : : |::::|:’-,\: : : : : : : : : : : : : : :”-‘\,|: 😐
…\ : : : : : : : : : :’\: : :\:::|: : ‘\’\: : : : :~,,: : : : : : : : : “~-‘,_
… \: : : : : : : : : : :\: /:|:/: : : :’,-‘-,_,: : : “-,: : : : : : : : :,/”’-,
… .\: : : : : : : : : : :\|: |/: : : ,-“….”-,:\: : : : ‘\: : : : : : :,/…….”-,
… …\: : : : : : : : : : \: |: : :/………..\*/ : : : :|: : : : : :,-“………..’|
… … .\ : : : : : : : : : ‘\’: : /…………..\/ : : : : /: : : : : :,-“…………./
… … …\ : : : : : : : : : ‘\:/……………..\: : :,/: : : : : /……………../
… … …..\ : : : : : : : : : \……………………\:,-“: : : : :,/…………/
… … … …\ : : : : : : : : : \,_………….._,”======’,_……….,-“\
… … … … \,: : : : : : : : : \: ¯”’~—~”¯: : : : : : : : : :¯”~~,’: :\
… … … … ..’\,: : : : : : : : : \: : : : : : : : : : : : : : : : : : : ‘|: : \
… … … … … .\, : : : : : : : : ‘\: : : : : : : : : : : : : : : : : : :|: : ‘\
… … … … … …\,: : : : : : : : :\ : : : : : : : : : : : : : : : : : |: : :\
… … … … … … ..\ : : : : : : : : \: : : : : : : : : : : : : : : : :|: : : :\
… … … … … … …\\,: : : : : : : :\, : : : : : : : : : : : : : : :/: : : : :\
… … … … … … … .\\ : : : : : : : :’\ : : : : : : : : : : : : : :|: : : : : ‘|
… … … … … … … ./:\: : : : : : : : :’\, : :;: : : : : :;: : : : |: : : : : 😐
… … … … … … … /: : \: : : : : : : : : ‘\,:;: : : : : :;: : : : |: : : : : 😐
… … … … … … …/: : : ‘\: : : : : : : : : :’\,: : : : : :; : : : :|: : : : : : |
… … … … … … ../: : : : :\: : : : : : : : : : :\, : : : ;: : : : : |: : : : : /: |
… … … … … … ,/: : : : : : :\: : : : : : : : : : ‘\,:.. :: : : : : : |: : : :;:: |
… … … … … ..,-“: : : : : : : :“-,: : : : : : : : : : \*, : : : : : 😐 : : : :\: |
… … … … … ,/ : : : : : : : : : :”-, : : : : : : : : : :\: : : : : /: : : : : : /
… … … … ..,/ : : : : : : : : : : : : :”-, : : : : : : : : :’\: : : 😐 : : : : : ,/
… … … … ,/ : : : : : : : : : : : : : : : ;-,: : : : : : : : :’\: : |: : : : : : /
… … … …/: : : : : : : : : : : : : : : : :;: “-,: : : : : : : : ‘\: |: : : : : /
… … … ../: : : : : : : : : : : : : : : : : : : : :“-,: : : : : : : \,|: : : : :/
… … … ,/: : : : : : : : : : : : : : : : : : : : : : :“-,: : : : : : :\: : : : /
… … …/-,-,”,,-,~-,,_: : : : : : : : : : : : : : : : : “-,: : : : : :’\: : :’|
… … …|’,/,/:||:\,\: : : “’~,,~~—,,,_: : : : : : : : ‘\: : : : : :\,: 😐
… … ..|: :”: ||: :”: : : : : : :”-,…….. ¯¯””~~~-~.|\: : : : : : \:|
… … ..|: : : ||: : : : : : : : : : :”-,…………………..|: : : : : : : \|
… … ..| : : : : : : : : : : : : : : : :”-,…………………\: : : : : : : :\,
… … ..| : : : : : : : : : : : : : : : :”-,\………………..“\: : : : : : : : ‘\
… … ..| : : : : : : : : : : : : : : : : : :”-\……………,/: : :\: : : : : : :\
… … ..| : : : : : : : : : : : : : : : : : : : \,………..,/: : : : ‘\: : : : : : ||
… … ..| : : : : : : : : : : : : : : : : : : : : \…….,/: : : : ,-~/: : ,: |: /:|
… … ..’|: : : : : : : : : : : : : : : : : : : : : \~”¯: : : : : :|: ::|: :/::/:,/
… … …|: : : : : : : : : : : : : : : : : : : : : |: : : : : : : :”-,,_/_,/-~”:|
… … …|: : : : : : : : : : : : : : : : : : : : : |: : : : : : : : : : : : : : : 😐
… … … |: : : : : : : : : : : : : : : : : : : : : |: : : : : : : : : : : : : : : |
… … … | : : : : : : : : : : : : : : : : : : : : :|: : : : : : : : : : : : : : :/`)
break
case 'morena':
enviar(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n
`)
break

case 'predio':
reply(`████████
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█ ＼＼
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█ヽ○ノ
█⬛⬛⬛⬛⬛█ /
█⬛⬛⬛⬛⬛█ノ)
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
${botName}domina😝💅`)
break

case 'casa':
reply(`_.█████████████████ 
_ ██████████████████ 
████████████████████ 
█████████████████████ 
_█_________▄▄▄▄_ ▄▄▄▄_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▀▀▀▀_ ▀▀▀▀ █✿ ✿ 
_█__█████_____________ █(\\|/) 
_____________██ _____________██ 
_____________█ 
______________█ 
_______________██ 
_________________██ 
___________________██ 
__________________██ 
_________________███ 
______________████ 
___________█████ 
_________██████ 
_______██████
essa e a casa que eu e ${pushname} vamos morar🥰🥰`)
break

case 'felizntl':
reply(`Feliz★* 。 • ˚ ˚ ˛ ˚ ˛ •
•。★Natal★ 。* 。
° 。 ° ˛˚˛ * _Π_____*。*˚
˚ ˛ •˛•˚ */______/~＼。˚ ˚ ˛
˚ ˛ •˛• ˚ ｜田田 ｜門｜ ˚
um feliz ano novo`)
break

case 'boneconeve':
reply(`----//---------█████
\\--\/--//----██████
-\\-▌-//---████████
--\\▌//----(▓)--------(▓)
---\▌/----(▓)-◒►◒--(▓)
----▌------(▓)-- = --(▓)
----▌--------(▓)---(▓)
----▌-----\(▓)-- ✺ --(▓)/
----▌----(▓)---- ✺ ----(▓)
----▌---(▓)----- ✺ -----(▓)
----▌---(▓)----- ✺ -----(▓)
----▌----(▓)---- ✺ ----(▓)
-----------(▓)(▓)▓(▓)(▓)`)
break

case 'noel':
reply(`▌░░░░██████████████████░░░▐
▌░░░█████████████████████░▐
▌░█████████████████████████
█▐█████▐░░░░░░░░░░░░░░░░░░█
▌█████▌█░░░░░░░░░░░░░░░░░░█
▐█████▌█▀▀▀█████▀▀██████▀▀█
▐█████▐█░▌▌░░░░░▌▐░░░░░▐▐░█
▌█████▐█▌░▌▐▌█▐▐▌▐▌█▐▐▐─▐░█
▌█████▐█░▌▌▀▌██▐▌▐▌██▐▀─▐░█
▌█████▐█▌░▌──────▐──────▐░█
▌▐█▄█▌█░░░▌───▀▄▄▄▄▀───▐▐░█
█▌███▌█░▌░▌▌─▐░░░░░░──▐▐░░█
█▀░░░░▀█░░▌▐▐░▐▄▄▄▄▌░─▌▐▐░█
▌░░░░░░█▐░░▌░░▌▀▀▀▀─░░─░░░█
█░░░░░▐▄░▌░░▐░▐▀▀▀▀░░░▐░▐░█
██▄▄▄▄██▐░▌░░▐░░▐░░░░▐░░░▄█
████████▄░░▐░░▐░░▐░▐░░░▐▄██
██████████▄▄▄▄▄▄▄▄▄▄▄▄▄████`)
break

case 'noel2':
reply(`__________(█)
_______██████
_____ ████████
____███████████
___ (░░░░░░░)░░░)
___(░(░█░░█░)░░░)
__ (░░(░░●░░░)░░░)
__ (░░░░◡░░)░░░░)
_██(░░░░░░░░░░)██
_███(░░░░░░░░░)███
████ ██(░░░)██ ████
████ █████████ ███
████ ████░████ ███
(░░)_ ▓▓▓▓▌▓▐▓▓▓_(░░)
(██) ███████████ (██)
_____█████░█████_▓▓▓\
_____█████-,█████▓▓▓▓▓)
_____█████-,█████▓▓▓▓▓)
___(░░░░░░)(░░░░░) ▓▓▓▓)
______(███)_(███)▓▓▓▓▓▓)
____ (████)_(████)▓▓▓▓▓)`)
break

case 'arvorentl':
reply(` ░░░░░░░░░░ ★
░░░░░░░░░░██
░░░░░░░░░████
░░░░░░░██▒▒▒▒██
░░░░░██▒▒▒▒▒▒▒▒██
░░░░░░░██▒▒▒▒██
░░░░░░░░██████
░░░░░░░███▓▓███
░░░░░░░░█▓▓▓▓█
░░░░░░░█▓▓▓▓▓▓█
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░████▓▓▓▓▓▓▓▓████
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░███████▓▓▓▓▓▓███████
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░███▓▓▓▓▓▓▓▓▓▓▓▓███
░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
███████▓▓▓▓▓▓▓▓███████
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
██████████████████████
░░░░░░░░██████`)
break

case 'boneconeve2':
reply(`__________ █████ 
_______█████████ 
________████████ 
_________ ███████ 
__________████████ 
______██████████████ 
_____███▒▒░░░░░░░░▒ 
_______▒░░░░░ ⓤ░░ⓤ░▒ 
_______▒░░░░░░░░ >░░ ▒ 
_______██▒░░░░░·︾·░░▒ 
_______████▒░░░░░░░▒ 
______▒▒███████████▒▒ 
____▒░░░░░▒▒▒▒███░░░▒ 
___▒░░░▒░░░░░░████░░ ▒ 
___▒░░░░▒░░░░░█████░░▒ 
___▒░░░░░▒░░░░███████░▒ 
____▒░░░░▒░░░░██████▒▒ 
____▒#▒▒▒▒▒░##░██████ 
__▒#▒░░░░░░░░░░░░░▒░▒ 
_▒░░░░░░░░░░░░░░Ѻ░░░▒ 
▒░░░░░░░░░░░░░░░░░░░ ▒ 
▒░░░░░░░░░░░░░░░Ѻ░░░ ▒ 
▒░░░░░░░░░░░░░░░░░░░ ▒ 
#▒░░░░░░░░░░░░░Ѻ░░░░▒ 
##▒░░░░░░░░░░░░░░░░##`)
break

case 'esqueleto':
reply(`░░░░░░░░░░░░▄▄▄▄░░░░
░░░░░░▄▄▄░░▄████▄░░░
░░░░░▐▀█▀▌░░░░░▀█░░░
░░░░░▐█▄█▌░░░░░░▀█░░
░░░░░░▀▄▀░░░▄▄▄▄▀▀▀░
░░░░▄▄▄██▀▀▀▀░░░░░░░
░░░█▀▄▄▄█░▀▀░░░░░░░░
░░░▌░▄▄▄▐▌▀▀▀░░░░░░░
▄░▐░░░▄▄░█░▀▀ ░░░░░░
▀█▌░░░▄░▀█▀░▀ ░░░░░░
░░░░░░░▄▄▐▌▄▄░░░░░░░
░░░░░░░▀███▀█░▄░░░░░
░░░░░░▐▌▀▄▀▄▀▐▄░░░░░
░░░░░░▐▀░░░░░░▐▌░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░░█░░░░░░░░█░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░▄▄█▄ ░░░░░▄█▄▄░`)
break

case 'violao':
replay(`░▄▀▀▀▀▄░░▄▄
█░░░░░░▀▀░░█░░░░░░▄░▄
█░║░░░░██░████████████
█░░░░░░▄▄░░█░░░░░░▀░▀
░▀▄▄▄▄▀░░▀▀`)
break
case 'lvm':
reply(`╔╗╔╗╔═╦╦╦═╗╔══╦╦╦═╦╦═╗
║║║║║║║║║╚╣║║║║║║╚╣║╔╝
║║║╚╣║║║║╔╣║║║║║╠╗║║╚╗
╚╝╚═╩═╩═╩═╝╚╩╩╩═╩═╩╩═╝

I LOVE MUSIC`)
break
case 'sherek':
reply(`⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉`)
break
case 'hack':
reply(`███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ 
███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
█████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
█████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
█████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
█████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████`)
break
case 'homer':
reply(`▓▓▓▓
▒▒▒▓▓
▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓▓▓
▒▓▓▓▓▓▓░░░▓
▒▓░░░░▓░░░░▓
▓░░░░░░▓░▓░▓
▓░░░░░░▓░░░▓
▓░░▓░░░▓▓▓▓
▒▓░░░░▓▒▒▒▒▓
▒▒▓▓▓▓▒▒▒▒▒▓
▒▒▒▒▒▒▒▒▓▓▓▓
▒▒▒▒▒▓▓▓▒▒▒▒▓
▒▒▒▒▓▒▒▒▒▒▒▒▒▓
▒▒▒▓▒▒▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▓▓▓▓▓▓▓▓▓
▒▓▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▓`)
break
case 'playboy':
reply(`..¶¶¶¶¶¶¶¶7………………………………$¶¶¶¶¶$
….¶¶¶¶¶¶¶¶¶¢…………………………¶¶¶¶¶¶¶$
….ø¶¶¶¶¶$¶¶¶¶……………………..¢¶¶¶¶¶¶¶$
……¶¶¶¶¶¶¶¶¶¶¶¶………………….¶¶¶¶¶¶¶¶ø
……..¶¶¶¶¶¶¶¶¶¶¶¶¢…………….¶¶¶¶¶¶¶¶¶o
…………¶¶¶¶¶¶¶¶¶¶¶¶…………..¶¶¶¶¶¶¶¶¶
…………..¢¶¶¶¶¶¶¶¶¶¶¶…………¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶$¶¶¶¶¶7……o¶¶¶¶¶¶¶¶7
………………….7¶¶¶¶¶¶¶¶¶¶….o¶¶¶¶¶¶¶¶
……………………….o¶¶¶¶¶¶¶¶….¶¶¶¶¶¶¶
………………………………….$¶¶¶o¶¶¶¶¶¶
……………………….o¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶7
…………….¶¶¶ø……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………..¶¶¶¶……….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………..¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………….7¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………………………o¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
……………………………¶¶¶¶¶¶¶¶¶¶¶¶¶1`)
break
case 'pigt':
reply(`▂╱▔▔╲╱▔▔▔▔╲╱▔▔╲▂
╲┈▔╲┊╭╮┈┈╭╮┊╱▔┈╱
┊▔╲╱▏┈╱▔▔╲┈▕╲╱▔┊
┊┊┊┃┈┈▏┃┃▕┈┈┃┊┊┊
┊┊┊▏╲┈╲▂▂╱┈╱▕┊┊┊ `)
break
case 'cat2':
reply(`░░░░░░░░░░░░░░░░░░░░░▄▀░░▌
░░░░░░░░░░░░░░░░░░░▄▀▐░░░▌
░░░░░░░░░░░░░░░░▄▀▀▒▐▒░░░▌
░░░░░▄▀▀▄░░░▄▄▀▀▒▒▒▒▌▒▒░░▌
░░░░▐▒░░░▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░▌▒░░░░▒▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄
░░░░▐▒░░░░░▒▒▒▒▒▒▒▒▒▌▒▐▒▒▒▒▒▀▄
░░░░▌▀▄░░▒▒▒▒▒▒▒▒▐▒▒▒▌▒▌▒▄▄▒▒▐
░░░▌▌▒▒▀▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒█▄█▌▒▒▌
░▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▄▀█▌▒▒▒▒▒▀▀▒▒▐░░░▄
▀▒▒▒▒▌▒▒▒▒▒▒▒▄▒▐███▌▄▒▒▒▒▒▒▒▄▀▀▀▀
▒▒▒▒▒▐▒▒▒▒▒▄▀▒▒▒▀▀▀▒▒▒▒▄█▀░░▒▌▀▀▄▄
▒▒▒▒▒▒█▒▄▄▀▒▒▒▒▒▒▒▒▒▒▒░░▐▒▀▄▀▄░░░░▀
▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▄▒▒▒▒▄▀▒▒▒▌░░▀▄
▒▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▒▀▀▀▀▒▒▒▄▀`)
break
case 'love6':
reply(`█───▄▀▀▀▀▄─▐█▌▐█▌▐██
█──▐▄▄────▌─█▌▐█─▐▌─
█──▐█▀█─▀─▌─█▌▐█─▐██
█──▐████▄▄▌─▐▌▐▌─▐▌─
███─▀████▀───██──▐██`)
break
case 'colaçao2':
reply(`_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
________░▒▓██
______░▒▓██
____░▒▓██`)
break


reply(`♥`)
break

case 'love4':
reply(`╔══╗♥
╚╗╔╝♥
╔╝╚╗♥
╚══╝♥
╔╗ ♥ღ♥ღ♥ღ♥
║║╔═╦╦╦╔╗
║╚╣║║║║╔╣
╚═╩═╩═╩═╝
╔╗╔╗♥
║║║║♥
║╚╝║♥
╚══╝♥

I LOVE U`)
break

case 'colaçao':
reply(`───▄▄▄▄▄▄─────▄▄▄▄▄▄
─▄█▓▓▓▓▓▓█▄─▄█▓▓▓▓▓▓█▄
▐█▓▓▒▒▒▒▒▓▓█▓▓▒▒▒▒▒▓▓█▌
█▓▓▒▒░╔╗╔═╦═╦═╦═╗░▒▒▓▓█
█▓▓▒▒░║╠╣╬╠╗║╔╣╩╣░▒▒▓▓█
▐█▓▓▒▒╚═╩═╝╚═╝╚═╝▒▒▓▓█▌
─▀█▓▓▒▒░░░░░░░░░▒▒▓▓█▀
───▀█▓▓▒▒░░░░░▒▒▓▓█▀
─────▀█▓▓▒▒░▒▒▓▓█▀
──────▀█▓▓▒▓▓█▀
────────▀█▓█▀
──────────▀

LOVE`)
break
case 'love3':
reply(`█▀███▀▀███▀▀███▀▀███▀▀███▀█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▒▒█▒▒▒▒▒███▒▒█▒▒▒█▒█████▒█
█▒▒█▒▒▒▒█▒▒▒█▒█▒▒▒█▒█▒▒▒▒▒█
█▒▒█▒▒▒▒█▒▒▒█▒▒█▒█▒▒█████▒█
█▒▒█▒▒▒▒█▒▒▒█▒▒█▒█▒▒█▒▒▒▒▒█
█▒▒████▒▒███▒▒▒▒█▒▒▒█████▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒█
█▒▒▒▒▒▒▒█──█▒████▒█──█▒▒▒▒█
█▒▒▒▒▒▒█──█─█────█─█──█▒▒▒█
█▒▒▒▒▒▒█─██───────███─█▒▒▒█
█▒▒▒▒▒▒█──────────────█▒▒▒█
█▒▒▒▒▒▒▒█────────────█▒▒▒▒█
█▒▒▒▒██▒▒█──██───██──█▒▒▒▒█
█▒▒▒█──█▒█──██───██──█▒▒▒▒█
█▒▒▒█──█▒█────███────█▒▒▒▒█
█▒▒▒█──█▒█───█───█──█▒▒▒▒▒█
█▒▒▒▒█──█─█───███──█▒▒▒▒▒▒█
█▒▒▒▒▒█────██────██▒▒▒▒▒▒▒█
█▒▒▒▒▒█──────████─██▒▒▒▒▒▒█
█▒▒▒▒▒▒█───────────█▒▒▒▒▒▒█
█▒▒▒▒▒▒▒███─────────█▒▒▒▒▒█
█▒▒▒▒▒▒▒▒▒█──────█───█▒▒▒▒█
█▒▒▒▒███▒▒█───────█───█▒▒▒█
█▒▒▒█──████─────████───█▒▒█
█▒▒▒█────█─────█────█─█▒▒▒█
█▒▒▒█─────█────█────██▒▒▒▒█
█▒▒▒█──────█───█──────█▒▒▒█
█▒▒▒▒█─────██████─────█▒▒▒█
█▒▒▒▒▒█──███▒▒▒▒█─────█▒▒▒█
█▒▒▒▒▒▒██▒▒▒▒▒▒▒▒█───█▒▒▒▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒█
█▒▒▒▒█▒▒▒▒█▒▒███▒▒█▒▒▒█▒▒▒█
█▒▒▒▒▒█▒▒█▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒▒██▒▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒▒█▒▒▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒█▒▒▒▒▒▒███▒▒▒███▒▒▒▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▄▄█▄▄██▄▄█▄▄█▄▄█▄▄██▄▄█▄▄█`)
break

case 'cueio':
reply(`....▓▓▓▓
..▓▓......▓
..▓▓......▓▓..................▓▓▓▓
..▓▓......▓▓..............▓▓......▓▓▓▓
..▓▓....▓▓..............▓......▓▓......▓▓
....▓▓....▓............▓....▓▓....▓▓▓....▓▓
......▓▓....▓........▓....▓▓..........▓▓....▓
........▓▓..▓▓....▓▓..▓▓................▓▓
........▓▓......▓▓....▓▓
.......▓......................▓
.....▓.........................▓
....▓......^..........^......▓
....▓............❤............▓
....▓..........................▓
......▓..........ٮ..........▓
..........▓▓..........▓▓`)
break

case 'cat':
reply(`___██__________██
___█▒█________█▒█
__█▒███____███▒█
__█▒████████▒▒█
__█▒████▒▒█▒▒██
__████▒▒▒▒▒████
___█▒▒▒▒▒▒▒████
__█▒▒▒▒▒▒▒▒████______█
_██▒█▒▒▒▒▒█▒▒████__█▒█
_█▒█●█▒▒▒█●█▒▒███_█▒▒█
_█▒▒█▒▒▒▒▒█▒▒▒██_█▒▒█
__█▒▒▒=▲=▒▒▒▒███_██▒█
__██▒▒█♥█▒▒▒▒███__██▒█
____███▒▒▒▒████____█▒█
______██████________███
_______█▒▒████______██
_______█▒▒▒▒▒████__██
_______█▒██▒██████▒█
_______█▒███▒▒▒█████
_____█▒████▒▒▒▒████
______█▒███▒██████__`)
break

case 'espadafds':
reply(`-----------//¤¤\\
----------// ¤¤ \\
----------\\ ¤¤ //
---------- \\¤¤//
---------- (____)
-----------(____)
-----------(____)
-----------(____)
-\_____/\__/-----\__/\____/
--\_°_[-------------] _°_/
------\_°_¤ ---- ¤_°_/
-----------\ _°_ /
-----------|\_°_/|
-----------[|\_/|]
-----------[|[¤]|].   ESPADA DO FDS
-----------[|;¤;|]
-----------[;;¤;;]
----------;;;;¤]|]\
---------;;;;;¤]|]-\
--------;;;;;[¤]|]--\
-------;;;;;|[¤]|]---\
------;;;;;[|[¤]|]|---|
-----;;;;;[|[¤]|]|---|
------;;;;[|[¤]|/---/
-------;;;[|[¤]/---/
--------;;[|[¤/---/
---------;[|[/---/
----------[|/---/
-----------/---/
----------/---/|]
---------/---/]|];
--------/---/¤]|];;
-------|---|[¤]|];;;
-------|---|[¤]|];;;
--------\--|[¤]|];;
---------\-|[¤]|];
-----------\|[¤]|]
------------\\¤//
-------------\|/
--------------V`)
break 
case 'minhocal':
reply(`________(▓)
_______(▓)
______(▓)
______(▓▓))
_____((▓▓▓))
______(▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(((▓▓▓▓▓))
________((▓▓▓▓))
________(▓▓▓▓)
_______(▓▓▓▓)
______(▓▓▓▓)
_____(▓▓▓▓)
____(▓▓▓▓)
___(▓▓▓▓)
__(▓▓▓▓)
_(▓▓▓▓)
.(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
.(▓▓▓▓)
_(▓▓▓▓)
__(▓▓▓▓)
___(▓▓▓▓)
____(▓▓▓▓)
_____(▓▓▓▓)
______(▓▓▓▓)
_______(▓▓▓▓)
________(▓▓▓▓)
_________(▓▓▓▓)
__________(▓▓▓▓)
___________(▓▓▓▓)
____________(▓▓▓▓)
_____________(▓▓▓▓)
______________(▓▓▓▓)
_______________(▓▓▓▓)
________________(▓▓▓▓)
_________________(▓▓▓▓)
_________________.(▓▓▓▓)
__________________(▓▓▓▓)
__________________(▓▓▓▓)
__________________(▓▓▓▓)
_________________.(▓▓▓▓)
_________________(▓▓▓▓)
________________(▓▓▓▓)
_______________(▓▓▓▓)
______________(▓▓▓▓)
_____________(▓▓▓▓)
____________(▓▓▓▓)
___________(▓▓▓▓)
__________(▓▓▓▓)
_________(▓▓▓▓)
________(▓▓▓▓)
_______(▓▓▓▓)
______(▓▓▓▓)
_____(▓▓▓▓)
____(▓▓▓▓)
___(▓▓▓▓)
__(▓▓▓▓)
_(▓▓▓▓)
.(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
.(▓▓▓▓)
_(▓▓▓▓)
__(▓▓▓▓)
___(▓▓▓▓)
____(▓▓▓▓)
_____(▓▓▓▓)
______(▓▓▓▓)
______.(▓▓▓▓)
_______(▓▓▓▓)
_______(▓▓▓▓)
_______(▓▓▓▓))
______((▓▓▓▓▓))
______(▓▓▓▓▓▓)
____((▓▓▓▓▓▓))
___(▓▓___▓▓▓▓)
__.(▓▓___▓▓▓▓))
___▓▓▓___▓▓▓▓▓))
_(▓▓▓▓___▓▓▓▓▓▓)
((▓▓▓▓_______▓▓)
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓))
(▓▓▓▓___▓▓___▓▓▓)
(▓▓▓▓___▓___▓▓▓▓)
(▓▓▓▓_____▓▓▓▓▓▓)
(▓▓▓▓___▓___▓▓▓▓))
(▓▓▓▓___▓▓___▓▓▓))
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓)
(▓▓▓▓________▓▓▓)
(▓▓▓▓___▓▓▓▓▓▓▓▓)
(▓▓▓▓_____▓▓▓▓▓▓))
(▓▓▓▓___▓▓▓▓▓▓▓▓)
(▓▓▓▓________▓▓▓)
((▓▓▓▓▓▓▓▓▓▓▓▓▓))
_((▓▓▓▓▓▓▓▓▓▓▓▓)
__((▓▓▓▓▓▓▓▓▓▓))
___((▓▓▓▓▓▓▓▓))
____((▓▓▓▓▓▓▓))
_____((▓▓▓▓▓▓)
______((▓▓▓▓))
_______((▓▓▓))
_______((▓▓▓)
______((▓▓▓)
_____((▓▓▓)
____((▓▓▓)
___.(▓▓▓)
__(▓▓▓)
.(▓▓▓)
(▓▓▓)
((▓▓)))
((▓▓))
_(▓▓))
__(▓▓)
___(▓▓)
____(▓▓)
_____(▓▓)
______(▓▓)
_______((▓)))
________((▓))
_________((▓)
_________((▓)
_________(▓)

minhoca do like`)
break


case 'love':
reply(`┳┻┳┻╭━━━━╮╱▔▔▔╲
┻┳┻┳┃╯╯╭━┫▏╰╰╰▕
┳┻┳┻┃╯╯┃▔╰┓▔▂▔▕╮
┻┳┻┳╰╮╯┃┈╰┫╰━╯┏╯
┳┻┳┻┏╯╯┃╭━╯┳━┳╯
┻┳┻┳╰━┳╯▔╲╱▔╭╮▔╲
┳┻┳┻┳┻┃┈╲┈╲╱╭╯╮▕
┻┳┻┳┻┳┃┈▕╲▂╱┈╭╯╱
┳┻┳┻┳┻┃'''┈┃┈┃┈'''╰╯
┻┳┻┳┻┏╯▔'''╰┓┣━┳┫
┳┻┳┻┳╰┳┳┳'''╯┃┈┃┃
┻┳┻┳┻┳┃┃┃┈'''┃┈┃┃
┳┻┳┻┳┻┃┃┃'''┊┃┈┃┃
┻┳┻┳┻┳┃┃┃┈'''┃┈┃┃.
┳┻┳┻┳┻┣╋┫'''┊┣━╋┫
┻┳┻┳┻╭╯╰╰-╭╯━╯.''╰╮
Love You Forever,,,,　 `)

break
case 'love5':
reply(`║║♫═╦╦╦╔╗
♫╚╣║║║║╔╣
╚═╩═╩♫╩═╝`)
break 
case 'caminhao':
await laura.sendMessage(from, { react: { text: `😑`, key: info.key }})
reply(`──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▌
───▄▄██▌█░░░░${botName}░░░░░▐
▄▄▄▌▐██▌█░EXPORTADORA░▐
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▌
▀❍▀▀▀▀▀▀▀❍❍▀▀▀▀▀▀❍❍▀`)
break
case '777':
reply(`█▄████─█▄████─█▄████
▀▀─▄█▀─▀▀─▄█▀─▀▀─▄█▀
──▄██────▄██────▄██
─▄██▀───▄██▀───▄██▀
─███────███────███
e o brazinho jogo da galera...`)
break
case 'android':
reply(`┈┈┈╲┈┈┈┈╱
┈┈┈╱     ▔▔╲
┈┈┃┈▇┈┈▇┈┃
╭╮┣━━━━━━┫╭╮
┃┃┃┈┈┈┈┈┈┃┃┃
╰╯┃┈┈┈┈┈┈┃╰╯
┈┈╰┓┏━━┓┏╯
┈┈┈╰╯┈┈╰╯`)
break

case 'heli':
reply(`▬▬▬.◙.▬▬▬
═▂▄▄▓▄▄▂
◢◤ █▀▀████▄▄▄▄▄▄◢◤
█▄ █ :) ██▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══
▬▬▬.Laura domina.▬▬▬`) 
break

case 'sexy':
reply(`_____Sexy?Sex
____?Sexy?Sexy
___y?Sexy?Sexy?
___?Sexy?Sexy?S
___?Sexy?Sexy?S
__?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Sexy?
?Sexy?Sexy?Sexy?Sexy
?Sexy?Sexy?Sexy?Sexy?Se
?Sexy?Sexy?Sexy?Sexy?Sex
_?Sexy?__?Sexy?Sexy?Sex
___?Sex____?Sexy?Sexy?
___?Sex_____?Sexy?Sexy
___?Sex_____?Sexy?Sexy
____?Sex____?Sexy?Sexy
_____?Se____?Sexy?Sex
______?Se__?Sexy?Sexy
_______?Sexy?Sexy?Sex
________?Sexy?Sexy?sex
_______?Sexy?Sexy?Sexy?Se
_______?Sexy?Sexy?Sexy?Sexy?
_______?Sexy?Sexy?Sexy?Sexy?Sexy
_______?Sexy?Sexy?Sexy?Sexy?Sexy?S
________?Sexy?Sexy____?Sexy?Sexy?se
_________?Sexy?Se_______?Sexy?Sexy?
_________?Sexy?Se_____?Sexy?Sexy?
_________?Sexy?S____?Sexy?Sexy
_________?Sexy?S_?Sexy?Sexy
________?Sexy?Sexy?Sexy
________?Sexy?Sexy?S
________?Sexy?Sexy
_______?Sexy?Se
_______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy
______?Sexy
_______?Sex
_______?Sex
_______?Sex
______?Sexy
______?Sexy
_______Sexy
_______ Sexy?
________SexY
fiu fiu hehe`)
break

case 'fro':
reply(`______________ 🍂_🍂_ 🍂_🍂
____________ 🍂__🍂__ 🍂__🍂
___________ 🍂___🍂__ 🍂___🍂
__________ 🍂____🍂 __🍂____🍂
_________ 🍂_____🍂 __🍂 ____🍂
_________ 🍂_____🍂 __🍂 ____ 🍂
_________ 🍂_____🍂 __🍂 ____ 🍂
__________ 🍂____ 🍂__🍂 ___ 🍂
____________ 🍂___🍂__🍂 __ 🍂
______________ 🍂🍂🍂🍂🍂
______🍃🍃_______🌱🌱
____🍃🍃🍃_______🌱
___🍃🍃🍃🍃_____🌱
______🍃🍃🍃_____🌱
__________🍃_______🌱
______🍃🍃_🍃____🌱
____🍃🍃🍃__🍃__🌱
___🍃🍃🍃_____🍃🌱
____🍃🍃__________🌱
____🍃_____________🌱
____________________🌱
____________________🌱
____________________🌱
________________███__██
______________███___ ███
_____________███_____███_██
____________███______███_███
___________███______███__███
_________████_____████__███
_________████___████___███_██
_________██████████___███_███
________███████████_████_███
________███████████████_███
________█████████████_█████
████_███████████████_████
█████_██████████████_████
██████_████████████_████
███████_██████████████
████████_███████████
█████████_███████
██████████
██████████
---------------\numa flor para outra flor\nessa eu dedico a você ${pushname} my amore🥰😘❤️`)
break

case 'mario':
reply(`▒▒▒▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒▒▒
▒▒▒▒▒▒▄▀▀▓▓▓▀█▒▒▒▒▒▒
▒▒▒▒▄▀▓▓▄██████▄▒▒▒▒
▒▒▒▄█▄█▀░░▄░▄░█▀▒▒▒▒
▒▒▄▀░██▄░░▀░▀░▀▄▒▒▒▒
▒▒▀▄░░▀░▄█▄▄░░▄█▄▒▒▒
▒▒▒▒▀█▄▄░░▀▀▀█▀▒▒▒▒▒
▒▒▒▄▀▓▓▓▀██▀▀█▄▀▀▄▒▒
▒▒█▓▓▄▀▀▀▄█▄▓▓▀█░█▒▒
▒▒▀▄█░░░░░█▀▀▄▄▀█▒▒▒
▒▒▒▄▀▀▄▄▄██▄▄█▀▓▓█▒▒
▒▒█▀▓█████████▓▓▓█▒▒
▒▒█▓▓██▀▀▀▒▒▒▀▄▄█▀▒▒
▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\nEl mario`)
break
case 'ursinho':
reply(`░░░░░░░░░░░░░░░░░░░░░░
░░░░░▄▄░░░░░░▄▄▄▄░░░░░
░░░▐▀▀▄█▀▀▀▀▀▒▄▒▀▌░░░░
░░░▐▒█▀▒▒▒▒▒▒▒▒▀█░░░░░
░░░░█▒▒▒▒▒▒▒▒▒▒▒▀▌░░░░
░░░░▌▒██▒▒▒▒██▒▒▒▐░░░░
░░░░▌▒▒▄▒██▒▄▄▒▒▒▐░░░░
░░░▐▒▒▒▀▄█▀█▄▀▒▒▒▒█▄░░
░░░▀█▄▒▒▐▐▄▌▌▒▒▄▐▄▐░░░
░░▄▀▒▒▄▒▒▀▀▀▒▒▒▒▀▒▀▄░░
░░█▒▀█▀▌▒▒▒▒▒▄▄▄▐▒▒▐░░
░░░▀▄▄▌▌▒▒▒▒▐▒▒▒▀▒▒▐░░
░░░░░░░▐▌▒▒▒▒▀▄▄▄▄▄▀░░
░░░░░░░░▐▄▒▒▒▒▒▒▒▒▐░░░
░░░░░░░░▌▒▒▒▒▄▄▒▒▒▐░░`)
break
//==============JOGOS===========\\

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `5%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100% isso sim que eu chamo de casal viu kkk`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... ELES DOIS FORMAL UM CASAL 💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'alma-gemeas':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100% nasceram um Pará o outro 🥰`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  eles são almas-gemeas💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break

case 'gay':
await laura.sendMessage(from, { react: { text: `🏳️‍🌈`, key: info.key }})
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'GAY DE MAIS'} else if (tamanho == 13 ) {pp = 'gay suspeito'} else if (tamanho == 14 ) {pp = 'esse ai ja comeu o amigo e virou gay'} else if (tamanho == 15 ) {pp = 'eita, muito gayyyy😅😅😅😅'} else if (tamanho == 16 ) {pp = 'e muito gay ta doido'} else if (tamanho == 17 ) {pp = 'sente atração por pau ne 😅😅😅'} else if (tamanho == 18 ) {pp = 'gayyyyyyyyyy de mais'} else if (tamanho == 19 ) {pp = 'virou gay pq nenhuma mulher quer um filho da puta como vc seu gayy'} else if (tamanho == 20 ) {pp = 'muito gay🏳️‍🌈🏳️‍🌈🏳️‍🌈'} else if (tamanho == 21 ) {pp = 'voce dau o cu e gostou ne muito gay'} else if (tamanho == 22 ) {pp = 'voce sente tesao enfiando o dedo no cu, muito gayyy🏳️‍🌈🏳️‍🌈'} else if (tamanho == 23 ) {pp = 'voce e gay de mais, nao conversa mais cmg'} else if (tamanho == 24 ) {pp = 'gay confirmado'} else if (tamanho > 25 ) {pp = 'vc e muito gay porra 🏳️‍🌈🏳️‍🌈'
}
hasil = `
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈
「${pp} 
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈

.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈
sua porcentagem de gay e ${random}%
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈 `
reply(hasil)
break

case 'chifre':
await laura.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde mundial de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso ai é??'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟${emoji}𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄${emoji}⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢𖣘 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if (!isGroup) return reply('Você só pode jogar em grupos🙄')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break
case 'nazista':
if (!isGroup) return reply(msg.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
reply('Aguarde...💂')
await delay(5000)
reply(`${pushname} Sua Porcentagem De nazista é De💂: ${aletg}%`)
break
case 'gado': case 'gada':
if (!isGroup) return reply(msg.groupo)
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, estou confiscando sua porcentagem de gado...🐂😅😅😅')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
const sn = ['sim', 'não', 'talvez']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(` ➥ A chance de (${q}) e de:❰ `+random+`% ❱ ✧ `)
break

case 'corno': case 'corna':
if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 200)}`
random2 = `${Math.floor(Math.random() * 200)}`
laura.sendMessage(from, {text: ` Pesquisando o quanto você e ${comando} :  @${pushname}},\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ muito corno kkkkkkkk🐂`, mentions: [blamention_id]})
break
case 'gostoso': case 'gostosa':
if (!isGroup) return reply(msg.grupo)
const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde avaliando seu perfil...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break
case 'lesbica':
case 'lesbico':
if(!isGroup) return reply('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
laura.sendMessage(from, {text: `➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

//jogos
//plaquinas
case 'plaq':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq2':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq3':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq4':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq5':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq6':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq7':{
if(!isPremium) return reply(msg.premium)
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'metadinha':{
                await laura.sendMessage(from, { react: { text: `🤔`, key: info.key }})
                let anu = await axios.get(`https://marcos025.onrender.com/api/ferramenta/metadinha?apikey=XANAX-VNCS$`)
                laura.sendMessage(sender, {image: {url: anu.data.masculina}, caption: `𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶`})
                laura.sendMessage(sender, {image: {url: anu.data.feminina}, caption: `𝑭𝑬𝑴𝑰𝑵𝑰𝑵𝑶`})
                reply(`a metadinha esta sendo enviado no seu privado...`)
                }
                break
 //=============//MENU+18\\===================\\              
case 'hentai':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/hentai?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break



case 'hentai2':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/hentai?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'ero':{
reply(`enviando no seu pv...`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/ero?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'loli' :{
reply("aguarde um momento, eu vou enviar no seu privado")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-ph`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: `você e um lolicon ${pushname}?🤔!`,
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await laura.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'fotopraperfil':
laura.sendMessage(from, { react: { text: `👽`, key: info.key }})
reply(`Enviando a foto no seu perfil...`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/travazap?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
break

case 'memepv':{
reply(`o meme esta sendo enviado no seu privado..`)
bla = await fetchJson("https://appp--trevodev.repl.co/memes?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {video: {url: bla.url}})
}break

case 'meme':{
reply(`enviando seu meme aguarde...`)
bla = await fetchJson("https://appp--trevodev.repl.co/memes?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(from, {video: {url: bla.url}})
}break

case 'foto18':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/foto_18?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'pussy':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/pussy?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'neko2':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/neko2?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'manga':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/manga?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'foot':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/foot?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'vídeo18':
case 'video18':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/video?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {video: {url: bla.url}})
}break

case 'xvi':
reply('realizando ação...')
dlk = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/pornogratis?nome=${q}&apikey=tohsaka`);

laura.sendMessage(sender, {video: {url: dlk.url}})
break

case 'calculadora': 
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return reply(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 


case 'gerarcpf':
enviar(`ESCOLHA UM PAIS , ONDE SEU
CPF VAI SER GERADO 
   ╭━━━━━◉                    ◉━━━━━╮ 
       ╔┉｡˚┉═══『☠️』═══┉｡˚┉╗    
       ║    *GERAR  CPF*    ║
       ╚┉｡˚┉═══『☠️』═══┉｡˚┉╝    
╰━━━◉  *BY PEDROZZ*  ◉━━━╯
ㅤ ㅤ  ི⋮ ྀ❌⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝❌⋮ ྀ

${prefix}estadosunidos


${prefix}canadá


${prefix}China


${prefix}Brasil
`)
break

case 'brasil':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : BRASIL 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'estadosunidos':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : ESTADOS UNIDOS 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'canada':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : CANADA 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'china':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${sender.split("@")[0]}
HORA : ${hora}
DATA :${data}
PAIS : CHINA

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
//cpf

case 'shadow':
var gh = body.slice(7)
var teks1 = gh.split("|")[0];
if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}shadow pedrozz`)
reply(msg.wait)
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${teks1}&apikey=BotWeA`, {method: 'get'})
buffer = await getBuffer(anu.result)
laura.sendMessage(from, buffer, image, {quoted: mek,caption: 'Eh...'})
                                        break

//trava zap

case 'botzin':
laura.sendMessage(from, { document: fs.readFileSync('./travas/bot.txt'), mimetype: "text/plain", fileName: "bot.txt", caption: "trava do SUKUNA-BOT", })
break
//fim 
case 'gif':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/gifs?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {gif: {url: bla.url}})
}break

case 'lbc':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/ass?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai4':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/cum?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break
//cases By pedrozz
//case audio by pedrozz

case 'sound':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound1':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound2':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound3':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound3.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound4':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound4.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound5':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound5.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound6':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound6.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound7':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound7.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound8':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound8.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound9':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound9.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound10':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound10.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound11':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound11.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound12':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound12.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'sound13':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound13.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound14':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound14.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound15':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound15.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound16':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound16.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound17':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound17.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound18':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound18.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound19':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound19.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound20':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound20.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound21':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound21.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound22':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound22.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound23':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound23.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound24':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound24.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound25':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound25.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound26':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound26.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound27':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound27.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound28':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound28.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound29':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound29.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound30':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound30.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound31':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound31.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound32':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound32.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound33':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound33.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound34':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound34.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound35':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound35.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound36':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound36.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'sound37':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound37.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound38':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound38.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound39':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound39.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound40':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound40.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound41':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound41.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound42':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound42.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound43':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound43.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound44':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound44.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound45':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound45.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound46':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound46.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound47':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound47.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound48':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound48.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound49':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound49.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound50':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound50.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound51':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound51.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
//fim audiomeme
//case musica
case 'musica':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica1':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica2':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica3':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica3.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica4':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica4.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica5':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica5.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica6':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica6.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica7':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica7.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica8':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica8.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica9':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica9.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica10':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica10.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica11':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica11.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica12':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica12.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'musica13':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica13.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica14':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica14.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica15':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica15.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica16':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica16.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica17':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica17.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica18':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica18.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica19':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica19.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica20':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica20.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica21':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica21.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica22':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica22.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica23':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica23.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
//fim case musica
case 'menufigu':
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
escrever(`╔━━⊱ *「 figurinhas 」*━━✕
┃${prefix}ale「  」
┃${prefix}cari「  」
┃${prefix}hum「  」
┃${prefix}pa.tu「  」
┃${prefix}pia「  」
┃${prefix}titi「  」
┃${prefix}tist「  」
┃${prefix}tal「  」
┃${prefix}add「  」
┃${prefix}add「  」
┃${prefix}add「  」
┃${prefix}add「  」
┗━━━━━━━━━━━━━━✕


╔━⊱ *「 𝘾𝙧𝙚𝙙𝙞𝙩𝙤𝙨 」*━━✕
┃𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝙗𝙮 §§PEDROZ§§∆•
┗━━━━━━━━━━━━✕`)
break


case 'criador':
await laura.sendMessage(from, { react: { text: `🤑`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/infodono.mp3")
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
        ╭┤女⃟⃟女 INFO CRIADOR 女⃟⃟女
   
             ╭▭▬▭▬▭▬▭▬▭▬▭
             ┃CRIADOR: Pedrozz
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃ZAP: Wa.me/556199317165
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃insta: @pedrozz_13755
             ┃insta: @laura_privat13755
             ┃https://instagram.com/pedrozz_13755
             ┃https://instagram.com/laura_privat13755
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃grupo:${grupo}
             ┃
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ╰▬▭▬〔🤑〕▬▭▬▭▬▭⪨
          ©*${botName}*-𝑩𝑶𝑻⃟      
            `       
            
           await laura.sendMessage(from, {image: fs.readFileSync('./laura/figu/laura1.webp'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"🙇🏻 informações do meu mestre🙇🏻",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/602966047fb689889943a.jpg`,
            sourceUrl: `https://instagram.com/pedrozz_13755`, 
            mediaType: 2
            }}})
             
break
case 'laurainsta':
pedrozz = `
laura privat💋`

await laura.sendMessage(from, {image: fs.readFileSync('./laura/figu/laura1.webp'), caption: pedrozz, contextInfo: {
            externalAdReply: {
            title:"Oi bb ,aqui meu Insta💋",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/96bf15839fdde97d90a77.jpg`,
            sourceUrl: `https://instagram.com/laura_privat13755`, 
            mediaType: 2
            }}})
             
break

case 'sermembro':
if (!isCreator) return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/cmddono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await laura.groupParticipantsUpdate(from, [kicee], 'demote')
break

case 'login':
try {
ppimg = await laura.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
if(!q.trim()) return enviar(`*Aonde está o nomee sua idade\n ex: ${prefix + comando} pedrozz/18\nseja mais inteligente kkk *\n\n*caso o login n foi use ${prefix}login2*`)
var [id, idade, sexualidade] = q.split("/")
enviar(`*aguarde estarei te registrando*`)
registro.push(sender)
fs.writeFileSync(`./laura/logins/regis-${sender}.json`, JSON.stringify(registro))

lau = `✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
〡 *𖤍 SEU LOGIN FEITO COM SUCESSO 𖤍*
⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *NOME:* 〖${id}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *IDADE:* 〖${idade}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
╔━━━━━━░🌸░━━━━━━╗
🌹⃟LOGIN By ${botName}ͦ⃟🌹
╚━━━━━━░🌸░━━━━━━╝
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟

pronto ${pushname} seu login foi feito agora você pode usar meus comandos tranquilamente 👻

✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
`

laura.sendMessage(from, {image: perfil,caption: lau, mentions:
[sender]}, {quoted: info })
break

case 'login2':
if(!q.trim()) return enviar(`*Aonde está o nomee sua idade\n ex: ${prefix + comando} pedrozz/18\nseja mais inteligente kkk *`)
var [id, idade, sexualidade] = q.split("/")
enviar(`*aguarde estarei te registrando*`)
registro.push(sender)
fs.writeFileSync(`./laura/logins/regis-${sender}.json`, JSON.stringify(registro))

lau = `✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
〡 *𖤍 SEU LOGIN FEITO COM SUCESSO 𖤍*
⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *NOME:* 〖${id}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *IDADE:* 〖${idade}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
╔━━━━━━░🌸░━━━━━━╗
🌹⃟LOGIN By ${botName}ͦ⃟🌹
╚━━━━━━░🌸░━━━━━━╝
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟

pronto ${pushname} seu login foi feito agora você pode usar meus comandos tranquilamente 👻

✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
`

laura.sendMessage(from, {image: {url:
'https://telegra.ph/file/c73bd6ceba34d061a0253.jpg' }, caption: lau, mentions:
[sender]}, {quoted: info })
break

case 'sitedono':
enviar(`aqui o site que meu dobo tas a fazer\n\nhttps://pedrozz.pedro13755.repl.co/\n\nusuario:pedrozz\nsenha:1234`)
break
case 'tabela1':
enviar(`O COMANDO ${comando} SERÁ BLOQUEADO POR 5 MINUTOS PARA EVITAR FLOD!

Símbolos japoneses, coreanos, chineses e asiáticos

㈀㈁㈂㈃㈄㈅㈆㈇㈈㈉㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛㈜㈝㈞㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩㈪㈫㈬㈭㈮㈯㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉄㉅㉆㉇㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻㉼㉽㉾㉿㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰㋐㋑㋒㋓㋔㋕㋖㋗㋘㋙㋚㋛㋜㋝㋞㋟㋠㋡㋢㋣㋤㋥㋦㋧㋨㋩㋪㋫㋬㋭㋮㋯㋰㋱㋲㋳㋴㋵㋶㋷㋸㋹㋺㋻㋼㋽㋾人益頹衙浳浤搰㍭煤洳橱橱煪煱

Símbolos matemáticos, frações

∀∁∂∃∄∅Δ∇∈∉ε∋∌∍∎Π∐Σ−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿∅∅∩∪≨≩≲≳⊊⊋⊓⊔⊕⊗⊜⋚⋛⏧➕➖➗ﾟ•°º⅟½⅓¾⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞℀℁℅℆

Setas e direções

᠈᠉ᨆᨈᨉᨊ←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⍅⍆⍇⍈⍏⍐⍖⍗⛕⛖⛗➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿⤴⤵⬅⬆⬇📤📥🔀🔁🔂🔃🔄

𝕾𝖎𝖒𝖇𝖔𝖑𝖔𝖘 𝕽𝖆𝖗𝖔𝖘 (visto em Celular)

𖠁𖠂𖠃𖠄𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖠅𖠆𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤎𖤏𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸

Símbolo do infinito, círculos, quadrados, losangos, traços, pontos e formas diversas

♾☍⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰

꧁༒꧂ᵐᵖ⁴⁰¹⁵⁷₁₅₇ⁿᵗʲʰˢᶠᵉﮩ٨ـﮩﮩ٨ـﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـﮩ٨ـﮩﮩ٨ـ♥ﮩ٨ـﮩﮩ٨ـᤢㅤꪰꪰ⛺炎༗ぁア$ホ愛望⳻᷼⳺⳻͟⳺ᯤᯤ⁴⁴⁴ᯤ⁹⁹⁹ᯤ⁶⁹Ⓥⓥ™ꛍ♂️〆么テ☂®☯©️✓ꪜ♲♻❤☔♀️❀✿⛅⛄Ϟ⚡†⸸ʚїɞ╰☆╮☆★♥♡《》〘〙☃ʚɞʚїɞ(×_×)(ʘʖ̲ʘ)(×﹏×)❖¤⸙߷ⰇᴥՖꙊꙪ►×͜××᷼×⁕᷼⁕⁕͜⁕⳻፝֟͜⳺⳻᷼⳺༺▁▂▃࿙࿚࿐༜♰♱✽〠֟፝⚓ϟ☬￮⁶⁹ₓⷪₓᷟₓᷛꚠ༗⸙Λﴶ۩۞۝⸕٭⸔ㅤꪰꪰꪰꪰ亗Δ࿆֟፝ტӪბ災も文დ♋〄々〩༄༅༆༇༈༉༓༜༻࿇࿂࿐࿑࿉࿈࿓࿔࿄࿅㍶∞⚠♿༬�᳀⦿꠶꠷ꯌ⌆⌇⌘⌚
𝕸𝖆𝖎𝖘 𝖚𝖘𝖆𝖉𝖔𝖘, usada para nick Free Fire


꧁꧂𒀱𒅒᭄


༫𐂡𒋨𖤍༗ههههه𓅂𖣘𒁂𒈒𒈞✰ཽ༺༻࿐☬Ӂ༒༈Ϟϟペᘛ「」៚༆乡⎝⎝⎠⎠░⫷⫸෴⚔⚒웃유ஒௐ우움ᐇᐖᐕᐵᑥᓆᒖᑆᑈᐛᓍᓎᓏᓠᓤᓥᓨᓩ῁῭΅⍡⍢⍣⍤⍥⍨⍩⛣ｯﭢツッシ⑆ツ囧ㅹÜ〲〴〠㋚㋡㋞ٹїټツ

${botName}-BOT`)
break

case 'taon?':
escrever(`${pushname}eu acho que sim n sei kkk`)
break
///case de onlyfans free by: pedrozz
        case 'only1': 
if(!isPremium) return reply(msg.premium)
enviar(`Enviado no seu pv`)
only1 = `
Luiza russo (mansão maromba)
via telegram> https://t.me/+8cJ7yGnq5fI2YjYx
`
laura.sendMessage(sender, {text: only1}, {quoted: selo})
break

case 'only2': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only2 = `
Luiza blue 
via telegram> https://t.me/+JaX8wY_45843ZTBh
`
laura.sendMessage(sender, {text: only2}, {quoted: selo})
break

case 'only3': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only3 = `
Isadora vale 
via telegram> https://t.me/+smb4i0bxRl41ZjRh
`
laura.sendMessage(sender, {text: only3}, {quoted: selo})
break

case 'only4': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only4 = `
Ingrid bianchi
via telegram> https://t.me/+RJtf2TqTQ8NjZjlh
`
laura.sendMessage(sender, {text: only4}, {quoted: selo})
break

case 'only5': 
if(!isPremium) return reply(msg.premium)
enviar(`Enviado no seu pv`)
only5 = `
Lizy Donato 
via telegram> https://t.me/+gmSjm2WZnb41OGEx
`
laura.sendMessage(sender, {text: only5}, {quoted: selo})
break

case 'only6': 
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only6 = ` 
Feh Galv茫o
via telegram> https://t.me/+naeQ1pp8ajswMjgx
`
laura.sendMessage(sender, {text: only6}, {quoted: selo})
break

case 'only7': 
if(!isPremium) return reply(msg.premium)
enviar(`[Enviado no seu pv`)
only7 = `
Tatyzack
via telegram> https://t.me/+NvglGFhOLSY5NmZ
`
laura.sendMessage(sender, {text: only7}, {quoted: selo})
break

case 'only8': 
if(!isPremium) return reply(msg.premium)
enviar(`[Enviado no seu pv`)
only8 = `
Ayrla Souza 
via telegram> https://t.me/+XLziPd47MWo2N2Y
`
laura.sendMessage(sender, {text: only8}, {quoted: selo})
break

case 'only9':
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only9 = `
ALINE FARIA
via telegram> https://t.me/+j1xp_hmXrx5lZWMx
`
laura.sendMessage(sender, {text: only9}, {quoted: selo})
break

case 'only10':
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only10 = `
KINE CHAN 
via telegram> https://t.me/+YIVax4IQ9aFlMDgx
`
laura.sendMessage(sender, {text: only10}, {quoted: selo})
break

case 'only11': 
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only11 = `
DJ NATHI
via telegram> https://t.me/+6Z5vuVApT-1lYjEx
`
laura.sendMessage(sender, {text: only11}, {quoted: selo})
break

case 'only12':
if(!isPremium) return reply(msg.premium)
enviar(`[Enviando no seu pv`)
only12 = `
BELE KAFFER
via telegram> https://t.me/+70DMw3iTzb0yMzEx
`
laura.sendMessage(sender, {text: only12}, {quoted: selo})
break 
case 'only13': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only13 = `
only dos lestes
via telegram> https://t.me/cadelinhasredansbr
`
laura.sendMessage(sender, {text: only13}, {quoted: selo})
break 
case 'only14':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only14 = `
Lua Santa
via telegram> https://t.me/+tX4sSnwJYBI3NGMx
`
laura.sendMessage(sender, {text: only14}, {quoted: selo})
break
case 'only15':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only15 = `
Lua Uchiha
via telegram> https://t.me/+nW1We0oSDuUxZWFh
`
laura.sendMessage(sender, {text: only15}, {quoted: selo})
break
case 'only16':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only16 = `
Cibelly Ferreira (prof do tik tok)
via telegram> https://t.me/+SkelQs1wPJ1iYmNh
`
laura.sendMessage(sender, {text: only16}, {quoted: selo})
break
case 'only17':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only17 = `
Catarina Paulino
via telegram> https://t.me/+JwZmPiNqSDI5NWUx
`
laura.sendMessage(sender, {text: only17}, {quoted: selo})
break
case 'only18':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only18 = `
Jennie s
via telegram> https://t.me/+lPvd-vfwxSxjMjkx
`
laura.sendMessage(sender, {text: only18}, {quoted: selo})
break
case 'only19':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only19 = `
Isabella Ramirez
via telegram> https://t.me/+9Ow2dG6RMjMwOGNh
`
laura.sendMessage(sender, {text: only19}, {quoted: selo})
break
case 'only20':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only20 = `
Irmãs Burch
via telegram> https://t.me/+qLHY0yEPajI1MzEx
`
laura.sendMessage(sender, {text: only20}, {quoted: selo})
break
case 'only21':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only21 = `
Mia Khalifa
via telegram> https://t.me/+Ky3nc1oowKY4Mjkx
`
laura.sendMessage(sender, {text: only21}, {quoted: selo})
break
/////fim menus 
case 'pronto':
enviar(`ja era meu patrão,vc falou q ta pronto?... então toma hehehe
OBS: não tem como parar kkk`)
bug = `${prefix}ja.era
`
laura.sendMessage(sender, {text: bug}, {quoted: selo})
break
case 'ja.era':
enviar(`${prefix}ja.era`)
break

///case de figurinha by pedrozz
case 'figuff':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/ff.webp'), caption: "Legenda" })
break

case 'ale':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/01.webp'), caption: "Legenda" })
break
case 'cari':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/cari.webp'), caption: "Legenda" })
break
case 'hum':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/hum.webp'), caption: "Legenda" })
break
case 'pa.tu':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/pa.tu.webp'), caption: "Legenda" })
break
case 'pia':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/pia.webp'), caption: "Legenda" })
break
case 'titi':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/titi.webp'), caption: "Legenda" })
break
case 'tist':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/tist.webp'), caption: "Legenda" })
break
case 'tal':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/tal.webp'), caption: "Legenda" })
break
//fim da case de figurinha 
//case audio

//case de videos

case 'xvideo1': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo1.mp4'), caption: "InnocentHigh Smalltits adolescente cavalga pau de professores" })
break
case 'xvideo2': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo2.mp4'), caption: "VIZINHOS LOIRAS SAFADOS FODEM UM CARA ALEATÓRIO" })
break
case 'xvideo3': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo3.mp4'), caption: "Amiga faz a meia-irmã nerd transar com o meio-irmão valentão Legendado" })
break
case 'xvideo4': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo4.mp4'), caption: "Dei viagra pro irmão só pra ser fodida por ele" })
break
case 'xvideo5': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo5.mp4'), caption: "Bratty - Pervy Step Loves My April Fools Sex Games S4:E11 (Legendado)" })
break

case 'xvideo6': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo6.mp4'), caption: "Homem casado é seduzido por duas novinhas Legendado" })
break
case 'xvideo7': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo7.mp4'), caption: "18yo Teen In Her First Orgy! Hentai" })
break
case 'xvideo8': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo8.mp4'), caption: "MILF Asks for an ANAL CREAMPIE — Uncensored Hentai [EXCLUSIVE] " })
break
//fim da case de videos
case 'escreva':
escrever(`oooi`)
break


case 'ameiobot':
await laura.sendMessage(from, { react: { text: `♥`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/adorei.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'infobot':
escrever(`OLA ME CHAMO ${botName}\nFUI CRIADA PELO PEDROZZ COM O INTUITO DE DEIXAR SEU GRUPO MAIS 
LEGAL E ORGANIZADO\nATUALMENTE ESTOU COM ${totalcmd} COMANDO PARA VOCÊ USAR COMO QUISER
E SE VOCÊ QUISER ME ALUGAR PARA COLOCAR EM SEU GRUPO FALE COM MEU CRIADOR "PEDROZZ" USANDO O COMANDO:${prefix}CRIADOR E MANDE UMA MENSAGEM PARA ELE.
E ESSAS SÃO MINHAS INFORMAÇÕES☺️☺️`)
break
case 'rebaixar': case 'rebaixa':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon *kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await laura.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremo???')
else if (responsepm[0].status === "200") return reply('Voce nao e mais administrador(a) desse grupo,você foi rebaixado👻')
else if (responsepm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('tente dnv')
break
case 'novocmd':
if (!q) return reply(`Exemplo: ${prefix}novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.`)
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './laura/image/menu.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
laura.sendMessage("556199317165@s.whatsapp.net",templateMessage)
break
case 'nomegrupo':
        {
          if (!isGroup) return reply(`esse comando só pode ser usado em gupo`)
          if (!q) return reply(`CADE O NOME PARA O GRUPO PIKINON?🙄`)
          if (!isGroupAdmins) return reply(`esse comando só pode ser usado por adimins`)
          if (!isBotGroupAdmins) return reply(`esse comando só pode ser usado se o bot for adm`)
          blat = args.join(" ")
          laura.groupUpdateSubject(from, `${blat}`)
          laura.sendMessage(from, { text: '🌸NOME DO GRUPO ALTERADO COM SUCESSO 🌸' }, { quoted: info }).catch((err) => {
            reply(`erro`);
          })
        }
        break

case 'descgp':
case 'descricaogp':
if (!isGroup) return reply(`Cmd somente em grupo`)
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!q) return reply(`CADE A DESCRIÇÃO PARA O GRUPO PIKINON?`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
laura.groupUpdateDescription(from, `${q}`)
laura.sendMessage(from, {text: `${emoji}A descrição do grupo foi alterada com sucesso${emoji}`}, {quoted: loc})
break

case 'sairgp':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente meu dono ou um adm pode usar'})
try {
laura.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente meu dono ou um adm'})
if (!isGroup) return reply(mess.group)
 let metadata = await laura.groupMetadata(from)
let teks = `❗MARCANDO TODOS DESSE GRUPO❗\n•\n`
for (let mem of participants) {
teks += `${emoji} @${mem.id.split('@')[0]}\n`
}
laura.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: loc })
}
break

case 'prefixo-bot': case 'setprefix':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!q) return reply(`exemplo *${prefix}setprefix .*`)
if (args.length < 1) return
prefixx = args[0]
config.prefix = prefixx
fs.writeFileSync('./config/data.json', JSON.stringify(config, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${config.prefix}`)
break


case 'ban': //essa case não e minha
case 'kick':{
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`somente em grupo mane🙄`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(donoNumher.includes(mentioned)) return reply('Não posso remover meu dono!😑')
let responseb = await laura.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else laura.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(donoNumher)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await laura.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
laura.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await laura.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else laura.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
ban = fs.readFileSync("./laura/audio/ban.mp3")
          laura.sendMessage(from, { audio: ban, mimetype: "audio/mp4", ptt: true }, { quoted: selo })
break
case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
if(!q) return reply("Ei, Cadê o Texto?")


reply(`Aguarde só um Pouquinho ${pushname} estarei gerando sua figurinha😊`)


att = await getBuffer(`https://tohsaka.onrender.com/api/maker/${comando}?texto=${q}&apikey=tohsaka`)


laura.sendMessage(from, {sticker: att}, {quoted: info})


break

case 'setbio':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!q) return reply(`manda exemplo *.setbio Prefixo .*`)
laura.fetchStatus(`${q}`)
laura.sendMessage(from, {text: 'Sucesso, alterou o nome da bio'}, {quoted: selo}).catch((err) => {
reply(`Ocorreu um erro`);
})
break

case 'bomb':
reply(`${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n
${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n`)

break

case 'pig':
case 'urso':
case 'seta':
case 'papel':
case 'grafit4':
case 'blackpinkepo':
case 'areia':
case 'balckpingv2':
case 'brotoluz':
case 'borracha':
case 'brilhante':
case 'diabo': 
case 'crack':
case 'vietnam':
case 'goldt':
case 'biscoito':
if(!isPremium) return reply(msg.premium)
if(!q) return reply(`Ei, ${pushname}Cadê o Texto?`)
reply("Estou Gerando,Aguarde só um Pouquinho...")
laura.sendMessage(from,
 {image: {url: `https://tohsaka.onrender.com/api/ephoto/${comando}?nome=${q}&apikey=tohsaka`}}, 
{quoted: info})
break

case 'rip':
case 'jail':
case 'del':
case 'gay':
case 'blur':
case 'bnw':
case 'trash':
case 'sepia':
case 'circle':
case 'invert':
case 'dither':
case 'rotate':
case 'wasted':
case 'wanted':
case 'pixelate':
case 'facepalm':
case 'bolsonaro':
case 'comunismo':
if(!isQuotedImage) return reply("Marque uma imagem")
reply("Estou Gerando, Aguarde um Pouquinho...")
if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
let uurlMedia = await laura.downloadAndSaveMediaMessage(quoted)
let anuo = await TelegraPh(uurlMedia)
comu = await getBuffer(`https://tohsaka.onrender.com/api/canvas/${comando}?img=${util.format(anuo)}&apikey=tohsaka`)
laura.sendMessage(m.chat,{image: comu}, {quoted: selo})}
break

case 'enquete':
if(!q) return reply(`Ei, ${pushname}Cadê o Tema da enquete?🤔🙄\n\nEXEMPLO: ${prefix}enquete pedrozz e louco.`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./laura/image/menu.jpg') }, { upload: laura.waUploadToServer })
var enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
"messageContextInfo": {
"messageSecret": "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="},
"pollCreationMessage": {
"name": `${q}`,
"options": [

{ "optionName": 'Sim' },
{ "optionName": 'Não'},
{ "optionName": 'talvez' }],
"selectableOptionsCount": 3
}}), { userJid: from, quoted: info})
laura.relayMessage(from, enquete.message, { messageId: enquete.key.id })
break
case 'ping':
uptime = process.uptime()
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
r = (Date.now() / 1000) - info.messageTimestamp
pokemon = `
╭┉┈┈┈───┈┈┈┈• 
ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ
        ╔━━━━━━░🌟░━━━━━━╗
✨⃟AQUI SEU PING:${String(r.toFixed(3))}}ͦ⃟✨
✨⃟TEMPO ATIVO:${kyun(uptime)}ͦ⃟✨
✨⃟.   DATA:${data} ͦ⃟✨
        ╚━━━━━━░🌟░━━━━━━╝
ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ
                         •┈┈┈───┈┈┈┈┅╯
           ꧁⃟✨By Pedrozz✨⃟꧂
`
await laura.sendMessage(from, {text: pokemon}, {quoted: info})
break
case 'gerargrupos':
case 'gerargrupo':
if(!q) return reply(`${pushname} Qual o Tipo de Grupo você procura?`)
reply("Aguarde, Estou Gerando os Grupos")
 if(!isPremium) return reply(msg.premium)   
    swp = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=tohsaka`)
    teks = `.• .• .• .• .• .• .• 《LAURA PRIVAT》.• .• .• .• .• .• .• .• .• .\n\n`;
    for(let i of swp) {
        teks += " *➤ NOME:* " + i.nome+ "\n"
        teks += " *➤ DESCRIÇÃO:* " + i.descrição+ "\n"
        teks += " *➤ LINK:* " + i.link+ "\n\n"
    }
    teks += `.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .`
    img = `${swp[0].img}`
   reply(teks)
    break

case 'promover':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('eu jurava que não tinha como adicionar o vento🤔🤔')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await laura.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/promovido.m4a'), mimetype: "audio/mpeg",},{quoted: info})
else if (responsedm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('Tenta dnv '-'')
break
case 'removervip': case 'delvip': case 'tirarvip':
if (!isGroup) return reply(msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return  laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/cmddono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

//laura assistente
case 'laura1':
enviar(`oi humano oq vc desejas hoje?`)
enviar(`1: tocar.musica.sad `)
enviar(`2: tocar.musica.sad2 `)
break
case 'tocar.musica.sad':
enviar(`enviando sua musica`)
await laura.sendMessage(from, { react: { text: `😭`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio2/sad1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
await esperar(1000)
break
case 'tocar.musica.sad2':
enviar(`enviando sua musica\nceditos:canal:sadstation`)
await laura.sendMessage(from, { react: { text: `😭`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio2/sad2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
await esperar(1000)
break

case 'audioale':
const audio = ['sound1','sound2','sound3','sound4','sound5','sound6','sound7','sound8','sound9','sound10']
 const pack = audio[Math.floor(Math.random() * audio.length)]  
const audio2 = ['sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20']
 const pack2 = audio[Math.floor(Math.random() * audio2.length)]  
const audio3 = ['sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30']
 const pack3 = audio[Math.floor(Math.random() * audio3.length)]  
const audio4 = ['sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40']
 const pack4 = audio[Math.floor(Math.random() * audio4.length)]  
const audio5 = ['sound41','sound42','sound43','sound44','sound45','sound46','sound47','souns48','sound49','sound50'] 
 const pack5 = audio[Math.floor(Math.random() * audio5.length)]  
enviar(`audios aleatórios sendo enviado👻...`)  
esperar(7000)
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack2}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack3}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack4}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack5}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
break

case 'figuale':
const sticker = ['1','2','3','4','5','6','7','8','9','10']
 const patck = sticker[Math.floor(Math.random() * sticker.length)]  
const sticker2 = ['11','12','13','14','15','16','17','18','19','20']
 const patck2 = sticker[Math.floor(Math.random() * sticker2.length)]  
const sticker3 = ['21','22','23','24','25','26','27','28','29','30']
 const patck3 = sticker[Math.floor(Math.random() * sticker3.length)]  
const sticker4 = ['31','32','33','34','35','36','37','38','39','40']
 const patck4 = sticker[Math.floor(Math.random() * sticker4.length)]  
const sticker5 = ['41','42','43','44','45','46','47','48','49','50'] 
 const patck5 = sticker[Math.floor(Math.random() * sticker5.length)]  
 const sticker6 = ['51','52','53','54','55','56','57','58','69','60']
 const patck6 = sticker[Math.floor(Math.random() * sticker6.length)]  
enviar(`figurinhas aleatórios sendo enviado👻...`)  
esperar(7000)
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck2}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck3}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck4}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck5}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck6}.webp`)})
break
      case 'fotolink':
      enviar(`espera um pouquinho ai`)
        try {
          if (isQuotedImage) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadImageToTelegraph(imageBuffer) {
              const form = new FormData();
              form.append('file', imageBuffer, { filename: 'image.jpg' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "image");
            const imageUrl = await uploadImageToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque a ft')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break
        case 'videourl':
      case 'videopralink':
        try {
          if (isQuotedVideo) {
            boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
              : info.message.videoMessage;
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadVideoToTelegraph(videoBuffer) {
              const form = new FormData();
              form.append('file', videoBuffer, { filename: 'media' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "video");
            const imageUrl = await uploadVideoToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque o video')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break
case 'contar':
if (args.length == 0) return reply( `como?\ncomo?\n${pushname} eu acho que você ainda não colocou nada ainda😠`)
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

case 'avaliar':
const avaliar = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: avalie Esse e o melhor bot que ja usei🥰\ne depois sua avaliação\n\n
av1 (★☆☆☆☆)\n
av2 (★★☆☆☆)\n
av3 (★★★☆☆)\n
av4 (★★★★☆)\n
av5 (★★★★★)
`)
if (args.length >= 400) return laura.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: selo})
var nomor = info.participant
tdptls = `*[${emoji}] AVALIAÇÃO [${emoji}]*\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n: ${avaliar}`
var options = {
contextInfo: {
mentionedJid: [sender]
},
}
await laura.sendMessage(`${global.donoNumher}@s.whatsapp.net`, options, tdptls, {quoted: selo})
reply(`*[${emoji}] MUITO OBRIGADA [${emoji}]*\n\nSua Avaliação Foi Enviada ao Meu Dono, Esterei Sempre Tentando Ser Melhor, Obrigada.
`)
break

case 'av1':
await reply (`😣 obrigada pela avaliação`)
suporte = dono + '@s.whatsapp.net';
tsexto = `*[ ação ]*
De: ${pushname} / wa.me//${sender.split("@")[0]}
La No Grupo: ${groupName}
As ${hora}Horas

Nota:: ★☆☆☆☆
`
await laura.sendMessage(suporte, tsexto, text)
break

case 'av2':
await reply (`😐 obrigada pela avaliação`)
suporte = dono + '@s.whatsapp.net';
kptexto = `*[ ação ]*
De: ${pushname} / wa.me//${sender.split("@")[0]}
La No Grupo: ${groupName}
As ${hora}Horas

Nota:: ★★☆☆☆
`
await laura.sendMessage(suporte, kptexto, text)
break

case 'av3':
await reply (`☺ obrigada pela avaliação`)
suporte = dono + '@s.whatsapp.net';
kkktexto = `*[ ação ]*
De: ${pushname} / wa.me//${sender.split("@")[0]}
La No Grupo: ${groupName}
As ${hora}Horas

Nota:: ★★★☆☆
`
await laura.sendMessage(suporte, kkktexto, text)
break

case 'av4':
await reply (`😀 obrigada pela avaliação`)
suporte = dono + '@s.whatsapp.net';
xxxtexto = `*[ ação ]*
De: ${pushname} / wa.me//${sender.split("@")[0]}
La No Grupo: ${groupName}
As: ${hora}Horas

Nota:: ★★★★☆
`
await laura.sendMessage(suporte, xxxtexto, text)
break

case 'av5':
await reply (`😍 obrigada pela avaliação`)
suporte = dono + '@s.whatsapp.net';
llltexto = ` Avaliação 
De: ${pushname} / wa.me//${sender.split("@")[0]}
La No Grupo: ${groupName}
As ${hora}Horas

Nota:: ★★★★★
`
await laura.sendMessage(suporte, llltexto, text)
break

case 'ligar':
enviar(`${timed} ${pushname} obrigado por me ligar🥰, como posso o servir você hoje??`)
break			

case 'desligar':
enviar(`${timed} ${pushname} ate mais tarde🥺`)
await esperar(3000)
enviar(`se precisar me ligar de novo e so digitar ${prefix}ligar que ja estarei aqui para servi-lo `)
break		
case 'perfil':
if (!isGroup) return reply(msg.grupo)
const migi = `${Math.floor(Math.random() * 105)}`
const russo = `${Math.floor(Math.random() * 105)}`
const valor = `${Math.floor(Math.random() * 5000)}`
{laura.sendMessage(
from, {audio: fs.readFileSync('./laura/audio/perfil.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: info}
)
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
try {
ppimg = await laura.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
try {
laura.sendMessage(from, {
image: perfil,
caption: `
*Nome: ${pushname}*

*Número: ${sender.split("@")[0]}*

*Grupo: ${groupName}*

*🐂Nivel de gado: ${migi}%*

*😈nível de puta: ${russo}%*

*💵valor do programa: ${valor}$*

*concelho* ${conselho}
`
}, {quoted: info})
} catch(e) {
console.log(e)
reply(msg.erro)
}
break

case 'conselho':
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
escrever(`${pushname} esta aqui um conselho:\n${conselho}`)
break

case 'hoje':
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
escrever(`${timed} ${pushname} hoje é \ndia: ${data} \nhora: ${hora}\nconselho do dia: ${conselho}`)
break

case 'frase':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					
					case 'recadoprowhatsapp':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
			
case 'frasecriativas':	//Dark goxtoso //Zalts apaixonado💙
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. ??','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
					
case 'nickff':	
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})
                    rate = body.slice(6)
					var foda =['ห¡หjค','کЋЯØцÐ','[̲̅т̲̅є̲̅c̲̅и̲̅σ̲̅и̲̅σ̲̅s̲̅н̲̅]','₫я.₫iяєSÞєςT','ⓣⓕⓤⓔ','꧁༺₦Ї₦ℑ₳༻꧂','꧁༒•TheKing•༒꧂','🖤𝘣𝘰𝘯𝘪𝘵𝘢🖤','꧁ঔৣ☬✞seunome✞☬ঔৣ꧂','꧁༺seuapelidoaqui༻꧂','꧁ඇెৡึ☫♆₦ÏŊلȺ♆☫ৡึెඇ꧂','★彡[seuapelido]彡★','꧁࿇🔥ÐÅ℟₭ƑÏ℟€☄️࿇꧂','༒☬ᤂℌ໔ℜ؏ৡ☬༒꧂','✞ঔৣ۝ÐâřҟŦﺂℜê۝ঔৣ✞','꧁࿇ÐɑʀҟƑîʀɛ࿇꧂','꧁࿗࿌₦Ї₦ℑ₳࿌࿗꧂','꧁༒☬ĶÏŁŁĚŔ☬༒꧂','𝕿𝖍𝖚𝖌 𝕷𝖎𝖋𝖊 Seu Nome','ʕ ͡° ʖ̯ ͡︻╦̵̵͇̿̿̿̿╤──seunome','★ SEUNOME ★','╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)','◥༒۝𝕭𝖗𝖚𝖓𝖔۝༒◤']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break
case 'nickff2':			
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})							
enviar(`AQUI ESTA SEUS NICK DE FREE FIRE ${pushname}\n\n\n
ห¡หjค\nکЋЯØцÐ\n[̲̅т̲̅є̲̅c̲̅и̲̅σ̲̅и̲̅σ̲̅s̲̅н̲̅]\n₫я.₫iяєSÞєςT\nⓣⓕⓤⓔ\n꧁༺₦Ї₦ℑ₳༻꧂\n꧁༒•TheKing•༒꧂\n🖤𝘣𝘰𝘯𝘪𝘵𝘢🖤\n꧁ঔৣ☬✞seunome✞☬ঔৣ꧂\n꧁༺seuapelidoaqui༻꧂\n꧁ඇెৡึ☫♆₦ÏŊلȺ♆☫ৡึెඇ꧂\n★彡[seuapelido]彡★\n꧁࿇🔥ÐÅ℟₭ƑÏ℟€☄️࿇꧂\n༒☬ᤂℌ໔ℜ؏ৡ☬༒꧂\n✞ঔৣ۝ÐâřҟŦﺂℜê۝ঔৣ✞\n꧁࿇ÐɑʀҟƑîʀɛ࿇꧂\n꧁࿗࿌₦Ї₦ℑ₳࿌࿗꧂\n꧁༒☬ĶÏŁŁĚŔ☬༒꧂\n𝕿𝖍𝖚𝖌 𝕷𝖎𝖋𝖊 Seu Nome\nʕ ͡° ʖ̯ ͡︻╦̵̵͇̿̿̿̿╤──seunome\n★ SEUNOME ★\n╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)\n◥༒۝𝕭𝖗𝖚𝖓𝖔۝༒◤\n\n\n${botName} domina pai.
`)
break

case 'bioff':	
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})									
enviar(`BIO DE FREE FIRE COM CORES PARA VOCÊ ${pushname}\n\n\n
[i][b][c][FFF000]Ⓥ [FF0000]SE CORRE, BUSCO EM CASA\n\n[b][c][FFF200]Ⓥ[i][FF1E26]RESPEITA MEU NOME KRLHﮩ٨ـﮩﮩ٨ـ♥ﮩ٨ـﮩﮩ٨ـﮩ٨ـﮩﮩ٨ـ♥ﮩ٨ـﮩﮩ٨ـ\n\n[i][b][c]༒VEM COM CALMA [FF0000]EMOCIONADO༒\n\n[b][c][E0FF00]⚡ʀʟxㅤᴏㅤᴛʀᴇᴍ[00BAB9]ㅤɴᴀᴏㅤᴛʀᴇᴍᴇ⚡\n\n[sup][i]HA[sub][/sup]HA[sup][/sub]HA[sub][/sup]HA\n\n[u][i][b][c][FE0000]⚠ usuário aposentado!\n\n[b][c]♲MODO[FF2298] FODA- SE[FFFFFF] ATIVADO〆㋡♥\n\n[b][c]VOCÊ NÃO É RUIM,[B812FF]EU QUE SOU MELHOR \n\n[b][c][FF0000]X[FFFFFF]VIDEOS[sup][FF0000]༒\n\n[b]este usuário ja tem dona🫶🏻❤️💍\n\n[i][b][c]Regra N°5: [FF0000]Não demostre amor\n\n[c]ⓘ inimiga da sensi [u][b][0099FF]Saiba mais\n\n[b][c][FFF000]✿ㅤ♬︎ㅤ☆ㅤ亗ㅤ〆ㅤ☃︎
㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ\n\n [s][i][b][c][FF0000] ⚡ REI DA UMP ⚡
 ㅤ\n\n[sup][b][c][FF9800]▂[FFFFFF]▂▂[AAAAAA] ڪے\n\n[b][c]FAZ O[01FF00] PIX ❖\n\n[sup][b][c]MÓ P[E040FF]A[E57DFF]Z[9129C5]ϟ\n\n\n${botName} domina pai.
`)
break

case 'frasebonita':	//Dark goxtoso //Zalts apaixonado
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'pinterest': 
if(!isPremium) return reply(msg.premium)
if(!q) return reply(`Ei, ${pushname}Cadê o Texto`)
reply("Estou a gerar.")
laura.sendMessage(from,
 {image: {url: `https://tohsaka.onrender.com/api/textpro/pornhub?nome=${q}&nome2=porn&apikey=tohsaka`}}, 
{quoted: info})

break

case 'nick':	
if(!q) return reply(`cade o seu nome para mim gerar seu nick?`)
                    rate = body.slice(6)
					var foda =[`︵‿︵${q}‿︵‿︵`,`★・・${q}・・★`,`»»————-${q}————-««`,`✧○ꊞ○ꊞ○ꊞ${q}ꊞ○ꊞ○ꊞ○ꊞ○✧`,`✼  ҉　 ҉　 ҉　${q} ҉　 ҉　 ҉　✼`,`♥♡♥♡${q}♥♡♥♡♥`,`☆━━━━━${q}━━━━━━☆`,`♡━━━━━━${q}━━━━━♡`,`｡☆✼★━━━${q} NO FREE FIRE━━━━━★✼☆｡`,`■□■□■${q} TOP■□■□■`,`○●○●${q}●○●○●○`,`▓▓▓▓${q}▓▓▓▓`,`▼△▼△${q}△▼△▼`,`●～●～●${q}●～●～●～,●・○・●・${q}・●・○・●`,`■━■━■${q}━■━■━■,⌒⌒⌒${q}⌒⌒⌒`,`・‥…━━━━☆${q}☆━━━━…‥・`,`★${q}★,☆♬○♩●♪${q}♪●♩○♬☆,:*:･ﾟ★`,`｡･${q}｡:･ﾟ★`,`｡･:*:,*･ﾟﾟ･*:.｡..｡.:*ﾟ:*:✼✿${q}✿✼:*ﾟ:.｡..｡.:*･ﾟﾟ･*`,`✧･ﾟ: *✧･ﾟ:*${q}*:･ﾟ✧*:･ﾟ✧,.・゜゜・${q}・゜゜・．`,`｡･ﾟﾟ･${q}･ﾟﾟ･｡`,`*＊✿${q}❀✿＊*`,`♬♩♪♩${q}♪♩♬`,`*:..｡o○${q}○o｡..:*`,`ﾟ+*:;;:*${q}*:;;:*+ﾟ`,`☆○o。${q}。o○☆`,`*+:｡.｡${q}｡.｡:+*`,`♥*♡+:｡.｡${q}｡.｡:+♡*♥`,`.｡*ﾟ+.*.｡${q}ﾟ+..｡*ﾟ+`,`☆.｡.:*${q}.｡.:*☆`,`✧･ﾟ: *✧･ﾟ:*(*❦ω❦)${q}*:･ﾟ✧*:･ﾟ✧`,`.｡*ﾟ+.*.｡(❁◡❁)${q}｡.｡:+*`,`*:..｡o○(；д；)${q}○o｡..:*`,`‿︵‿︵(ಥ﹏ಥ)‿︵‿︵${q}`,`♥♡♥(ꈍᴗꈍ)ε｀*)♥♡♥${q}`,`☆♬○♩●♪✧♩((${q}))♩✧♪●♩○♬☆`,`✼　 ҉ 　✼　${q}(ꃋิꎴꃋิ) ✼　 ҉ 　✼　`,`๑۩۞۩๑ (${q}) ๑۩۞۩๑`,`╔╣█╠╗╚${q})╝╔╣█╠╗`,`llıllı (${q})) ıllıllı`,`ε[-ิิ_•ิ]з ${q}) ε[-ิิ_•ิ]з`,`●๋• (${q})) ●๋•`,`㋛㋛ (${q})) ㋛㋛`,`●±‡±● (${q})) ●±‡±●`,`[웃ღ${q})웃 ]%`]
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
					break

case 'gamemode1':
escrever(`o criativo foi ativado, então vou voa ${pushname} voa igual um passarinho kakkkkkaka`)
break
//cases fornecidas pelo: @lucasx7
case 'simi':
try {
if(args.length < 1) return reply('Ser desprovido de inteligência, como vou saber responder se vc não mandou a pergunta?')
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'natura':
case 'business':
case 'diamond':
case 'summer':
case 'golden':
case 'carved':
case 'stone':
case 'glass':
case 'luxury':
case 'whitegold':
case 'giraffe':
case 'slice':
case 'arcane':
case 'batman':
case 'neonglitch':
case 'ancient':
case 'neonheart':
case 'newyear':
case 'Candy':
case '3dchristimas':
case 'depsea':
case 'neongreen':
case 'break':
case 'd3dstone':
case 'fiction':
case 'joker':
case 'demongreen':
case 'natal':
case 'neon3d':
case 'asfalto':
case 'neon':
case 'neon3':
case 'neonligth':
case 'neondevil':
case 'ossos':
case 'jeans':
case 'metalblue':
case 'carbon':
case 'pink': {
if(q >= 11) return reply(`só 10 letras véi`)
reply('*Isso pode demorar um pouco*')
if (!q) return reply(`Use assim ${prefix && comando} café`)
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/${comando}?nome=${q}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break
 case 'pornhub': {
if (!q) return reply(`Use assim ${prefix && comando} pedrozz/laura`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/pornhub?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'gameover': {
if (!q) return reply(`Usa da maneira correta, ${prefix + comando} Lucas/dev`)
reply(msg.espere)
var [cala, u] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/gameover?nome=${cala}&nome2=${u}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'ninja': {
if (!q) return reply(`Use assim ${prefix && comando} blz/ok`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/ninjalogo?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'wolf': {
if (!q) return reply(`Use assim ${prefix && comando} blz/ok`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/wolfgalaxy?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'whitebear': {
if (!q) return reply(`Use assim ${prefix && comando} blz/ok`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/whitebear?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'escudo': {
if (!q) return reply(`Use assim ${prefix && comando} blz/ok`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/escudo?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'thor': {
if (!q) return reply(`Use assim ${prefix && comando} blz/ok`)
reply(msg.espere)
var [calma, up] = q.split("/")
anu = await getBuffer(`https://nazuna-api.onrender.com/api/textpro/thorlogo?nome=${calma}&nome2=${up}&apikey=6ga58HpFpJ`)
laura.sendMessage(from, {image: anu}, {quoted: info});
}
break

case 'nuke': case 'arquivargp':
 if (!isCreator) return reply(msg.dono)
 if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
 if (info.key.fromMe) return
 function banirtodos() {
 var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
 nmrbot = botNumber.split("@")[0]
 var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
 if (resp === donoNumher || resp === botNumber) {
 return
 } else {
 laura.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
 }
 }
 myinterval = setInterval(banirtodos, 1000)
 if (groupMembers.length <= 2) {
 clearInterval(myinterval);
 }
 break

case 'gerarpessoa':
gerarpessoa = await fetchJson(`http://nexus.vortexuscloud.com:4214/api/pessoa?apikey=keybx`)
reply(`\n🤠 ${pushname} AQUi ESTÁ 👍\n\n👥 ㅤ- NOME: ${gerarpessoa.Nome} 
🛜 ㅤ- CPF: ${gerarpessoa.CPF} 
🌐 ㅤ- RG: ${gerarpessoa.RG} 
👁️‍🗨️ ㅤ- DATA DE NASCIMENTO: ${gerarpessoa["Data de Nascimento"]} 
🔥 ㅤ- SEXO: ${gerarpessoa.Sexo} 
♈ ㅤ- SIGNO: ${gerarpessoa.Signo} 
➖ - FILIAÇÃO: ${gerarpessoa.Filiação} 
👾 ㅤ- MÃE: ${gerarpessoa.Mãe} 
🐂 ㅤ- PAI: ${gerarpessoa.Pai} 
🔆 ㅤ- ONLINE: ${gerarpessoa.Online} 
🔰 ㅤ- E-MAIL: ${gerarpessoa["E-Mail"]} 
⚜️ ㅤ- SENHA: ${gerarpessoa.Senha} 
➰ ㅤ- CEP: ${gerarpessoa.Endereço.CEP} 
➿ ㅤ- ENDEREÇO: ${gerarpessoa.Endereço.Endereço} 
🔢 ㅤ- NÚMERO: ${gerarpessoa.Endereço.Número} 
🆖 ㅤ- BAIRRO: ${gerarpessoa.Endereço.Bairro} 
〰️ ㅤ- CIDADE: ${gerarpessoa.Endereço.Cidade} 
♾️ ㅤ- ESTADO: ${gerarpessoa.Endereço.Estado} 
📞 ㅤ- TELEFONES: ${gerarpessoa.Telefones} 
🗿 ㅤ- ALTURA: ${gerarpessoa["Características Físicas"].Altura} 
😱 ㅤ- PESO: ${gerarpessoa["Características Físicas"].Peso} 
⭕ ㅤ- TIPO SANGUÍNEO: ${gerarpessoa["Características Físicas"]["Tipo Sanguíneo"]} 
🟥 ㅤ- COR FAVORITA: ${gerarpessoa["Cor Favorita"]} \n`)
break

case 'rastrear': { 
if (!q) return reply(`cade o código de rastreio?`)
try {
	reply('Estou Buscando seu pedido, Aguarde...')
infoRa = await fetchJson(`https://marcos025.onrender.com/api/outros/rastrear/shoppee?id=${q}&apikey=XANAX-VNCS$`)
const { info } = infoRa[0]
await reply(""+info)
} catch (e) {
return reply("Erro..")
}
}
break

case 'emoji': {
if (!args.join(" ")) return reply('CADÊ O EMOJI?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await laura.sendMessage(from, {image:{url:emoji.images[4].url}, caption:"PRONTO!"}, {quoted: selo})
await laura.sendMessage(from, {text:`!s`}, {quoted: seloese})
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
})
}
break


case 'emoji2':     
case 'emoji-mix':
case 'emojimix': {
    if (!q) return reply( `Exemplo : ${prefix + comando} 😅+🤔`) 
	reply('SER NÃO FOR TENTA COM OUTRO... ?')
			let [emoji1, emoji2] = q.split`+`
		 anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
	let encmedia = await laura.sendImageAsSticker(from, res.url, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
		}
}
break
//==========(COMANDOS DE ALTERAÇÃO DE ÁUDIO)===========\\

case 'tupai':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'reverse':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'fat':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'deep'
:if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'vozmenino':  
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break  

case 'grave':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'grave2':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'bass3':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'estourado':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'estourado2':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break


case 'audiorapido':  
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if(!isPremium) return reply(msg.premium)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(msg.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
laura.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

///fim dos alteradores
case 'getcase':{
if (!q) return reply("Está faltando nada não??");
if (!isCreator && !info.key.fromMe) return reply(resposta.dono)
const local = fs.readFileSync("./comandos/case.js").toString();
const cases = local.indexOf(`case '${q}'`);
reply(`${cases}`)
}
break

case 'instamp4':
if (!q) return reply ("Adicione o link do vídeo do Instagram!")
if (!q.includes("instagram.com")) return reply("Só pode ser link do Instagram!!")
fetchJson(`https://tohsaka.onrender.com/api/dl/igdl?link=${q}=&apikey=tohsaka`).then( knn => {
laura.sendMessage(from, {video: {url: knn.resultado.link}, caption: "Está ai 👍"}, {quoted: selo})})
break

case 'gtts':
if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n.gtts PT Oi`) 
const gtts = require('./laura-Functions/funções/gtts')(args[0])
if (args.length < 2) return reply('Falta colocar o código do idioma!')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
laura.sendMessage(from, {audio: buffer, ptt:true}, {quoted: selo})
fs.unlinkSync(rano)
})
})
break



case 'sensiff':
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})		
enviar(`\n\nSensi FF ― Sensi 7
Geral → 79
Ponto → 60
2x → 89
4x → 99
AWM → 100
Olhadinha → 100
DPI → 590
via Mobileverso.com.br\n\n
Sensi do Two9 (Mobile)
Geral → 88
Ponto → 100
2x → 100
4x → 100
AWM → 19
Olhadinha → 100
DPI → 411
via Mobileverso.com.br\n\n
SENSI DO MARECHAL
Geral → 90
Ponto → 80
2x → 50
4x → 50
AWM → 100
Olhadinha → 100
DPI → 900
via Mobileverso.com.br\n\n
Sensi do Freitas
Geral → 95
Ponto → 87
2x → 85
4x → 83
AWM → 87
Olhadinha → 92
DPI → 999
via Mobileverso.com.br\n\n
Sensi do marechal
Geral → 93
Ponto → 100
2x → 100
4x → 100
AWM → 100
Olhadinha → 100
DPI → 411
via Mobileverso.com.br\n\n
sensi verdadeira do marechal alone
Geral → 94
Ponto → 100
2x → 100
4x → 100
AWM → 3
Olhadinha → 25
DPI → 1144
via Mobileverso.com.br\n\n
Sensi do Nobru
Geral → 93
Ponto → 100
2x → 100
4x → 100
AWM → 77
Olhadinha → 50
DPI → 411
via Mobileverso.com.br\n\n
Sensi p/Galaxy A03 CORE
Geral → 100
Ponto → 60
2x → 99
4x → 96
AWM → 40
Olhadinha → 21
DPI → 400
via Mobileverso.com.br\n\n
Sensi FF ― MOTO G22
Geral → 50
Ponto → 86
2x → 50
4x → 81
AWM → 50
Olhadinha → 73
DPI → 411
via Mobileverso.com.br\n\n
Sensi FF ― A10s
Geral → 50
Ponto → 50
2x → 8
4x → 5
AWM → 50
Olhadinha → 50
DPI → 960
via Mobileverso.com.br\n\n
Sensi FF ― GALAXY A12
Geral → 100
Ponto → 96
2x → 94
4x → 96
AWM → 50
Olhadinha → 50
DPI → 960
via Mobileverso.com.br\n\n
Sensi FF ― IPHONE 11 Only in the can
Geral → 89
Ponto → 40
2x → 50
4x → 50
AWM → 50
Olhadinha → 50
DPI → 120
via Mobileverso.com.br\n\n
Sensi do two9
Geral → 98
Ponto → 98
2x → 99
4x → 100
AWM → 15
Olhadinha → 1
DPI → 650
via Mobileverso.com.br\n\n
`)
break

case 'nickfema':
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})		
enviar(`NICKS FEMININOS VIA Mobileverso.com.br\n\n
MORENAㅤᵍˢᵗᶻツ\n
™ ＣＨＥＦＩＮＨＡ么\n
ＰＲＩＮＣＥＳＡ✿\n
MK ㅤＴＯＴＯＳＡ✿\n
ＣＡＣＨＥＡＤＡ☂\n
4кㅤɢʀɪⲛɢᴧッ\n
! м᪐ʀᴇɴᴀ  ღ\n
么ＦＡＬＩＤＡᯤ⁹⁹⁹\n
ᶦ ᵃᵐ ＡＮＡ᭄\n
ＬＵ ꓥ ✿\n
@ꓟᴇᴅᴜѕᴀˢˣﾠꚠ\n
꧁༒pεquεหค༒꧂\n
ᶠᵉ✿᭄ꜱᴜʀᴛᴀᴅᴀ࿐\n
＠ᴮᴿＳＡＦＡＤＩＮＨＡ\n
T7ㅤＭＯＲＥＮＡㅤ✿\n
⁹⁹⁹Ｊａｐｉｎｈａ\n
ＭＡＦＩＯＳＡ ™么\n
!ＭØＲＥＮ Λ ×͜×\n
࿙ᴄʜᴀᴛɪɴʜᴀﾠꨄ\n
⁕͜⁕ＰＡＴＲＯＡ ᣖᙚ\n
ＯＦＦﾠＢＵＧＡＤＡ ☂\n
S7ㅤDEUSA ✿\n
!ʙᴜʀɢᴜᴇꜱᴀﾠდ \n
ᴀɴᴊɪɴʜᴀ ☆†\n
OFFㅤ＠GATAㅤღ\n
L7ㅤBELLA.xㅤ么\n
☂мᴀⳑνᴀᴅᴀ_ツᵏ\n
!ＰＡＮＤＩＮＨＡ ♡᭄\n
༒ꤵɑℓꪜɑｄｏη a༒\n
＠ ＢＡＮＤＩＤＡ დ\n
FXㅤＡｎｊａㅤ╰☆╮\n
ᴀɴᴊᴀ  xɪᴛ  ☂\n
ＤＥＵＳＡ დ\n
ＭＡＲＲＥＮＴＡㅤ☃\n
ϟ ＬＵＡ ✿\n
ＢＡＩＸＩＮＨＡ¹⁵⁷$\n
ΛⲤㅤΒᏒⲒЅΛÐΛ™\n
CHEFINHAㅤ☂\n
᧗ｏɾ ⲉ η a♡❀\n
ＦＸ ㅤＧＲＩＮＧＡ⚡⛺\n
ღ ＤＡＭＡ⁷⁷⁷亗\n
ꕶꓴƦΤꓥꓓλ⳻ ︫⳺\n
ＰＲＩＮＣＥＳＡꕤ\n
ㅤSurtadinha᭄\n
༒ꞖƲɌᏀƲÊꕶȺ ༒\n
ʀᴀνᴇɴᴀ.sx\n
ꓥＮONIMλ♡\n
ＰＲＩＮＣＥＳＡൗ\n
ᴴᴹㅤＳＡＦＡＤＡ 〆\n
ღDIABINHA ღ\n
＠ＭＯＲＥＮＡდ\n
!Lua.xit 么\n
ᐪᔿᶢﾠꝔɑ†rоɑ 么\n
亗ㅤᎠꓥＮꓥDꓥ\n
亗ㅤҒλⳐıƊλ\n
ASㅤᎠUQUESA༒\n
ＡＬＥＲＱＵＩＮＡ×᷼×\n
༒BURGUESA༒\n
＠Dammaㅤ!ㅤ1v4\n
ＣＨＥＦＩＮＨＡ么\n
乃Ｏ丁ＥｋＩƝＨA\n
ʰˢᴍᴇᴅᴜsᴀ_☂\n
͋ＢＲＡＢＡ愛\n
! Dｅｕｓａ.ｘｐ★ッ\n
ＢＥＬＬＡˣᶦᵗ ﾠホ\n
֟፝᧗oʀᥱɴα¹⁵⁷
`)
break
case 'nickhomi':
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})		
enviar(`NICKS MASCULINOA VIA Mobileverso.com.br\n\n
!ShoxzZㅤxpㅤツ\n
!shotzz.xit愛\n
ⓋＴＷＯ９☯⚡\n
ＳＯＣＡﾠＦＯＦＯ™\n
ㅤⓋﾠＢＬＡＣＫ ⁴⁴⁴\n
!ＳＡＧＡＺ.exe愛\n
ＢＬＡＣＫㅤＺＩＮ 〆☂\n
†ﾠＭＯＲＥＮＯㅤ×͜×\n
ⓋㅤＭＡＦＩＯＳＯㅤ†\n
i’mㅤsattzXㅤ†\n
ＷＨＩＴＥ ４４４ 亗 \n
COMEㅤXOTA⁶⁹\n
!Steikeㅤぁ⛺ᒾ¹\n
SWΛTㅤ＠ＭＯＲＥＮＯ\n
Tremㅤxitㅤ☪\n
Yzzyㅤxereca⛺\n
ＦＺＮ   ＸＩＴ⚡☯\n
ᴹᵈᶜㅤϟXITΛDO⿆\n
!ShoxzZㅤsxㅤツ\n
HSㅤㅤ10%⚡\n
Ｃｈｅｆｉｎ⚡₁₅₇\n
socaﾠㅤxereca\n
么BRUXO☯¹⁵⁷\n
ＳＯＣＡㅤＦＯＦＯ×᷼×\n
HSﾠＦＡＬＩＤＯ ヅ然\n
ＦZㅤＬＡＣＯＳＴＥﾠ〆\n
ⓋＲＥＩＤＥＬＡＳ\n
Luffyﾠᵘᵐᵖ ⚡么\n
I’m  gstz  ★\n
ⓥＦＸㅤＮＯＢＲＵ¹⁵⁷\n
!Ghost.xdﾠ望\n
༒⚡乙乇ㄩㄩ丂⚡༒\n
GㅤHㅤOㅤSㅤT ﾠ文\n
ＩＴＡＣＨＩ☯ ™\n
4KㅤFrost.xp么\n
☯ＳＵＲＴＡＤＯ࿐\n
ＣＲＩＭＩＮＯＳＯⁿᵗʲ
draXㅤㅤsexo!ㅤ\n
Zulluﾠumpㅤ〆\n
⁹⁹⁹Ｊａｐｉｎｈａ\n
STꓥRKㅤM1014愛\n
ｏｎｅㅤｌｕｆｆｙᯤ⁶⁹\n
ＴｒｅｍㅤＢａｌａﾠ☔\n
THEㅤKINGㅤ亗\n
Ｉ’ＭㅤGRINGO愛\n
2ｘㅤＴＥＲＲＯＲㅤϟ\n
ⓥ BlackN444么\n
†ㅤ!sattz7x★＠\n
Shotzz.opﾠ☯\n
ＬＡＣＯＳＴＡＤＯ×᷼×\n
Ⓥ ＦＸ ＣＥＲＯＬ\n
ＭＥＮＯＲㅤｘｐㅤㅤꪰꪰ\n
亗 ＰＲＩＮＣＩＰＥ･\n
!sagaz.xit\n
ＳＯＬＩＴＡＲＩＯヅ \n
!Luckzin.ip愛\n
Fantasma.xpϟ\n
＠ＧＲＩＮＧＯㅤＲＩＣＯ\n
炎⚡ᴹᴵᴻᴬᵀᶿ⚡炎\n
†ㅤ!sattz7xㅤ★\n
ꛎ7ㅤꝒOSEIDON꫞\n
!ShoxzZㅤxpㅤ★\n
Vermeㅤdaㅤump
ＢＡＮＤＩＤＯ ☯\n
SOCAㅤFOFOﾠ\n
ᎬᏞＢＲＵＸＯ™⁶⁹\n
Ｘ5ㅤＫｚｉｎｘㅤ7ㅤტ\n
ⓥＦｘＴＷＯ９ᯤ⁶⁹\n
ⓥㅤＬＯＳㅤＦＥＮＩＸ\n
ᴴᴹㅤＳＡＦＡＤＯ 〆\n
trem ㅤbalaㅤ☂\n
draxﾠplugㅤ★\n
Ph7.xdㅤ愛\n
ᵐᵖ⁴⁰ＸＩＴＡＤＯₓⷪ\n
IMPﾠＰＡＴＲÃＯ☔\n
!ＦＲＯＳＴｘ!\n
Shotzin.xit★\n
ＰＭㅤＥＬＩＴＥㅤᴮᴿ\n
ᴛʀᴇᴍㅤʀᴀʀᴏ᭄\n
XITADO.reg 愛\n
ＮＡＯㅤＣＯＲＲＥㅤᶶ\n
Theㅤkingㅤტ\n
乃尺Uメ口ﾠ☂☯\n
  ꑄᴍoꗣєㅤㅤ☂ \n
⁴⁴⁴ㅤCRAZYㅤ么\n
꧁༒Zeus༒꧂\n
SocaﾠPaty ٭\n
!MacroX.ip么\n
ＳＴㅤϟＢＬＡＣＫ４４４\n
ⓋＺＥＵＳㅤ×͜×ㅤ⚡\n
UMPﾠSteik444\n
Frostzin.xit\n
@ㅤＳＡＧＡＺㅤ777\n
@ＭＯＲＥＮＯ 70K\n
7Ｐ ＭＥＬＩＯＤＡＳ〆\n
ＢＡＨＩＡＮＯ †\n
ＳＯＺＩＮㅤㅤ   \n
ＲＡＤﾠＭＥＮＯＸ７☂\n
ＴＨＥㅤＤＡＲＫ×᷼×\n
ᏞἀㅤEℓᥱㅤ١᪀᪀᪀ₓ\n
⸙ＣＯＹＯＴＥ☣\n
ＫＮＤ ﾠＴＲＵＮＫＳ☂\n
BlackN444ㅤら\n
ғʟ᭴ടʜﾠ愛\n
!shotzzy ㅤㅤ么\n
Patinhoツloko\n
ꓥᎡꓚꓥꓠЈØ   ♱\n
ⓋＫＢＵＬＯＳＯ\n
ⓋㅤＳＯＬＩＴＡＲＩＯ\n
ＰＭㅤＥＬＩＴＥ ⚡\n
ＳＮＴㅤＬＨＺＩＮ 愛\n
!Drestx7.op么\n
愛 NOVEXXㅤx7\n
ｃｈeｆiｚiｎᶠᵉ♱\n
Tremㅤxitㅤ么\n
ㅤᵀᴿᴱᴹᴱㅤᴺᴬᴼㅤ❖\n
ＫＩＤㅤＢＥＮＧＡＬＡ\n
ＭＯＲＥＮＯㅤᯤ⁴⁴⁴\n
!strick.sx ⚡\n
么ㅤＩＴＡＣＨＩㅤʰˢ\n
ＳＯＣＡﾠＦＯＦＯ™么\n
Yzin.Xit 愛☯\n
ＴＥＲＲＯＲﾠＤＥＬＡＳ\n
ＡＮÔＮＩＭＯㅤ☏ㅤ⚠\n
PMㅤＥꓡＩꓔＥㅤᴮᴿ\n
×͜× BANDIDO♱\n
SWΛTㅤＭＡＬＶＡＤＯ\n
ＭＡＦＩＯＳＯ✿\n
!Tʀᴀʟнᴀ.хᴘ☂\n
d’raça9 \n
ⓋㅤＳＯＬＩＴＡＲＩＯ†\n
ᖴᖴꓧᏎꓫﾠⳊ᠐%\n
ＰＡ IﾠㅤTＡㅤON™\n
＠sagazXﾠ★\n
ＰＲＩＮＣＩＰＥ™×͜×\n
Ｌ⁷ﾠＢＲＵＸＯツ\n
Ｓⲛ ߋ ꪝㅤᯤ⁹⁹⁹\n
ⓋㅤＭＡＦＩＯＳＯ☂ツᵏ\n
＠Novin7ㅤfof★\n
ᎠΛᎡᏦﾠᣵªᵈ愛\n
ＩＭＰＥＲＡＤＯＲ〆\n
Ⓥﾠａｎｊｉｎｈｏ☂\n
90%ㅤXITADOㅤ⛄\n
〲ᙗⳑꙙсӄꤘɪⲛ⚡⼡\n
02ㅤʙʀᴜxᴏ ☯ㅤ†\n
ﾠ@dre7.ipﾠ★\n
!ㅤphzinnﾠ愛\n
!Frost.zx 么\n
!fodeㅤpaty 夷\n
ғʀᴏsᴛʏ⚡ᜢᜢᜢ\n
!Brxㅤplugㅤ★\n
Kroozzㅤ☂\n
ʰˢＦＡＬＩＤＯ☂\n
亗ＸＩＴＡＤＯᒾ\n
Veryㅤputoㅤ★\n
Jrㅤt’socaㅤდ\n
Umpﾠk1ng  亗\n
ＳＡＧＡＺ☂\n
!SAD.xit ★\n
I’mㅤVT7ㅤ$\n
ＧＨＯＳＴ⚡\n
❖ＬＡＣＯＳＴＥ❖
`)
break
case 'nickguilda':
await laura.sendMessage(from, { react: { text: `⚔️`, key: info.key }})		
enviar(`NICK DE GUILDA VIA Mobileverso.com.br

Nome da Guilda	TAG Sugerida	Tradução
DeathWish	DW	
Leviatãs	LVT	
The Dolls	TD	
GoldenGirls	GG	
Zumbi	ZB	
Mystics	MS	Místicas
Starforge	SFG	Forja das Estrelas
Paradox	PRX	
Fallen	FL	
Shadowstalkers	SS	Perseguidores das Sombras
Project 0	P0	
OASIS	OA	
Corleones	CL	
Black Mambas	BM	
SEALS	SEAL	Os SEALS
Supremacia	SPC	
Phantom Team	PT	
Nightshade	NS	Sombra Noturna
The Slayers	TS	
DeathMachine	DM	Máquina Mortal
Blackhammer	BH	Martelo Negro
Dark Alliance	DA	Aliança das Trevas
Umbra	UMB	
Sky Strikers	SKY ou SS	Atacantes do Céu
Cougar	CG	Puma
Brutality	BRT	
AMAZONAS	AMZ	
Broken Essence	BE	Essência Quebrada
Sadness	SAD	Tristeza
Whisper	WSP	Sussurro
Annihilation	AN	Aniquilação
VooDoo Girls	VG	
Python	PY	Python
Radioactive	RA	Radioativo
Team Wish	TW	
Vixen	VX	
Killer Kittens	KKT	Gatinhos Assassinos
Phoenix Order	PXO	Ordem da Phoenix
Chaos Smiths	CHS	Ferreiros do Caos
DareDevils	DD	
Queens	QN	
Barons	BR	
The Gang	TG	
Heaven’s Grave	HG	Sepultura do Céu
Orion	OR	
Gorilas	GRL	
Counter Kill	CK	Contra-Matar
Team Cash	TC	
Banshees	BNS	
Frontline	FL	Linha de frente
Vampiros	VMP	
Rushadoras	RSH	
The Snipers	TS	
BullDogs	BD	
Monarquia	MN	
Heróica	HR	
GigaBytes	GB	
NEMESIS	NMS	
Miragem	MR	
Hell Reign	HR	Reino do inferno
Dark Sheep	DS	Ovelha Negra
Erro404 –	404	
Alpha Helix	AH	A Hélice Alfa
Órbita	OBT	
Solarskulls	SS	Crânios Solares
Reis da Safe	RdS	
Generais	GN	
Tauren	TRN	Os Tauren
Silvermoon	SM	Lua de Prata
Breakers	BRK	
Defiant	DEF	Desafiadores
Fuzileiros	FZ	
Aurora	AR	
SevenSins	7S	Sete Pecados
Vision	VS	
Aliança	ALC	
Vingadores	VGD	
TRETA	TRT	
Assassinas	ASN	
MYTH	MT	
Los Capas	LC	
Human Shield	HS	trad
IMPERATRIZES	IMP	
DOOM	DM	
Armageddon	AMG	
Lightningroses	LR	Rosas Relâmpago
Lost House	LH	Casa Perdida
ADAGA	ADG	
Martial Law	ML	Lei Marcial
PATRULHA	PT	
Black Magic	BM	Magia Negra
Black Luv	BL	Amor negro
Ravens	RV	Corvos
SatanSoldiers	SS	Soldados de Satã
X-Women	XW	
The Fiends	FND	Os Demônios
Impacto	IMP	
Apocalipse	APC	
Defiance	DEF	Desafio
Take’em Down	TkD	Derrubem eles!
QuadraKill	QK	
The Faithful	FTH	Os Fiéis
Hells Angst	HA	Do alemão, “Medo do Inferno”
Legião	LG	
Overlords	OVL	Soberanos
HELLFIRE	HF	Fogo do Inferno
Critical Hit	CH	
Night Elfs	ELF	Elfos da Noite
Amnesia	AMN	
HeadHunters	HH	Caçadores de Cabeças
Strikers	ST	
Sentinelas	SNT	
Predadores	PDR	
Bloody Rain	BRN	Chuva Sangrenta
The Hive	HIV	A Colméia
Shadow Howl	SH	Uivo da Sombra
BEAST	BT	
Warriors	TW	
The Sinful	SIN	O pecador
The Nameless	NL	Os sem-nome
Illuminati	ILM	
BLITZ	BZ	
Thunderskull	TSK	Caveira Trovão
The Sacrament	SAC	O Sacramento
Lost Legion	LL	A legião perdida
Olympus	OLP	
Sentinels	SN	Sentinelas
FOX	FOX	
GIRLPOWER	GP	
MadScientist	MS	Cientista Louco
The Pantheon	PAN	O panteão (grupo de pessoas importantes)
SerialKillers	SK	
GunsNGuns	GnG	
Pro Bots	PB	
Black Veil	BVL	Véu Negro
Daemons	DM ou DAE	Uma forma diferente de “Demons”; Demônios
ShallowGrave	SGR	Cova Rasa
Patrulheiros	PT	
Chaos Pirates	CP	Os Piratas do Caos
Demons	DMN	Demônios
Torpedo	TP	
AVALANCHE	AVL	
The Menace	MEN	A Ameaça
Starlets	STL	
Red Star	RS	
Vendetta	VEN ou VDT	Vendeta (vingança)
Scythers	SCY	Foices
BALA	BL	
Harpias	HPS	
Coiotes	CT	
The Rising	TR	Os Ascendentes
LooterZ	LTZ	
Solaris	SL	
The Saints	SNT	Os Santos
Matadores	MTD	
Kryptonita	KPT	
LifeForce	LF	Força Vital
Synergy	SYN	Sinergia
Assassins	ASS	
The Banished	BAN	OS Banidos
Father’s War	FW	Guerra do Pai
SWAT	SWT	
RainbowGuns	RG	
Vortex	VTX	
Demon Hydra	DH	Hidra Demoníaca
Wakanda	WKD	
Unchained	UNC	
Chiefs	CH	Chefes
Cosmo	CM	Cosmo
Eternal Harmony	EH	Harmonia Eterna
As Anjinhas	AA	
Rebels	RBL	Rebeldes
Team Nova	TN	
DIVISÃO	DV	
Team Elvira	TE	
Vampiresses	VMP	
Morte Certa	MC	
Means to an End	M2E	Meios para um fim
Watchmen	WM	
Menace	MN	
Immortals	IM	
SemiToyGuns	STG ou TG	Armas Quase-de-Brinquedo
Swan Song	Swan, SS ou Song	A Canção do Cisne
Epicenter	EPI	Epicentro
Foras da Lei	FdL	
BloodBrothers	BB	Irmãos de Sangue
Harbinger	HB	Prenúncio
Cygnus	CGN	
Evil Dolls	ED	
Bruxas do 71	B71	

`)
break

case 'figuff1':
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/figuff1.webp`)})
break

case 'figuff2':
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/figuff2.webp`)})
break

case 'wallpeperff':
var wallpaperff = linksff[Math.floor(Math.random() * linksff.length)]
laura.sendMessage(from, {image: {url: `${wallpaperff}`}, caption: `aqui esta seu wallpaper do free fire ${pushname}` })
break

case 'tes':
await laura.sendMessage(from, {image: fs.readFileSync('./laura/figu/laura1.webp'), contextInfo: {
externalAdReply: {
            title:"🍷seja bem vindo ao menu🍷",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/ddb3a51b8db6c39cbb743.jpg`,
            sourceUrl: `https://www.youtube.com/watch?v=0FZ99lAQqtA`, 
            mediaType: 2
            }}})
            escrever(`fala ai meno`)
            break
            
case 'assistenteoff':
if(!isCreator) return reply(msg.dono)
enviar(`estarei fechando a assistência mestre`)
break

case 'setfotogp':
case 'fotogp': 
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + comando} *Marque uma foto*`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await laura.updateProfilePicture(from, {url: medipp})
reply(`Ola adm ${pushname} a Foto do grupo alterada com sucesso`) 
break

case 'fotobot':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!isQuotedImage) return reply(`Envie foto com o .fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
laura.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil amor vlw')
break

case 'play':
if (!q) return reply(`CADE O NOME DA MÚSICA PIKINON?`)
await esperar(2000)
enviar(`pera ai aquele \n\nvagabundo do meu criador não colocou esse comando ainda me desculpe ai ${pushname}
reclama com ele depous vlw`)
break

case 'fotobot':
        if (!isCreator) return reply(msg.dono)
        if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
        buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
        await laura.updateProfilePicture(botNumber, buff)
        reply('Obrigado pelo novo perfil vlw')
        break
        
        
//=============FIM DOS CMD COM PREFIXO==============\\

}
//==================CMD SEM PREFIXO==============\\

if (budy.includes("bom dia") || (budy.includes("Bom dia"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bom dia.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
}

if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa tarde.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (budy.includes("boa noite") || (budy.includes("Boa noite"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa noite.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes(`@${donoNumher}`)) {
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/29.webp`)}, {quoted: info});
await esperar(1000)
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/oqdono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
 }

if (texto.includes('sexo')){
reagir(`🔞`)
await esperar(1000)
reagir(`😘`)
await esperar(1000)
reagir(`🌹`)
await esperar(1000)
escrever(`${pushname} tarado(a) kkkk`)
}

if (texto.includes('mentira')){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/mentira.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes('gatinho')){
 if (texto.includes('gatinho'))
 laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/miau.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}
 
if (texto.includes('cachorro')){
if (texto.includes('cachorra'))
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/auau.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes('viado')){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound44.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if(budy.includes("🗿")) {
bla = fs.readFileSync("./laura/figu/🗿.webp")
laura.sendMessage(from, {sticker: bla}, {quoted: selo})
escrever(`*SEJA FINO MEU SENHOR*🍷`)
}

if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
reply(`Corno é você, SEU FDP DA DISGRAÇA DA DISGRAÇA`)
}

if (budy.includes("bot corna") || (budy.includes("Bot corno"))){
reply(`Corn@ é você, SEU FDP DA DISGRAÇA DA DISGRAÇA`)
}

if (budy.includes("bot puta") || (budy.includes("Bot lesbica"))){
reply(` E aquela sua mãe gostosa, SEU FDP DA DISGRAÇA😠😠`)
}

if (budy.includes("bot viado") || (budy.includes("Bot gay"))){
reply(` E aquele seu pai, SEU FDP DA DISGRAÇA😠😠`)
}

if (texto.includes('viado')){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boiola.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (budy.includes("bot gostoso") || (budy.includes("Bot gostosa"))){
reply(` ai para eu sou timid@🥵😳\n\nmais pera ai você ta chamando um bot de gostos@???\nvoce não e normal kkk`)
}

if (budy.includes("amei o bot") || (budy.includes("Amei o bot"))){
await laura.sendMessage(from, { react: { text: `♥`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/adorei.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (budy.includes("Nudes") || (budy.includes("nuds"))){
reply(` eu te mando mais vai ser só para vc ta?🥵😘`)
}

if (texto.includes("https://chat.whatsapp.com/")){
reply(`Me desculpe ${pushname} para me colocar no seu grupo primeiro voce tem que me alugar use o comando .alugar  ou Fale com meu criador\n\nCHAT: wa.me/${donoNumher}`)
}

if (budy === `${prefix}comando`) {
laura.sendMessage(from, {text: `Se desejar visualizar o menu, por favor, digite ${prefix}menu` }, {quoted: info })
}

if (budy.includes("Laura") || (budy.includes("laura"))){
                    rate = body.slice(6)
					var foda =[`QUEM OUSA ME CHAMAR?`,`PRONTO PARA TE SERVIR SIR`,`${timed} ${pushname} o quê queres comigo rapa?????`,`LAURA PRIVAT A MAIS PICA`,`O QUE VC DESEJA?`,`OLÁ, MEU NOME É LAURA PRIVAT`,`EU NUM GUENTO MAIS ESSA VIDA DE MERDA, NEGO ACHA QUE EU SOU IM HUMANO CONTROLANDO KKKLKLKL, QUERIA EU TER TEMPO PARA ISSO`,`*PARA DE ME CHAMAR SE N EU DESÇO A JIROMBA DE 5 METROS NO TEU BURACO DE MINHOCA SEU PORRA*`,`*LAURA AQUI HUMANO*`,`*BOM JOGO E FORÇA NA VIDA AMIGO*`,`*OQUE VOCÊ QUE ME CHAMA SEU SER INSIGNIFICANTE?*`,`*${botName} SEMPRE A DISPOSIÇÃO*`,`*FALA AI ${pushname}*`,`*MDS VOCÊ NÃO PARA DE ME CHAMAR NÃO? ATE PARECE QUE ME AMA*`,`nao te responderei pois estou brava com o pedrozz,ele não qui me dar um novo comando🥺`,`${timed}`,`Pergunta: Por que os robôs nunca sentem medo?\n\nResposta: Porque eles têm nervos de aço.`,`mds vc quê um nufs meu é?....pois eu não vou te manda eu sei que sou gostoso mais não vou`,`mds parece minha puta não para de me chamar slc`,`tio san socorrooooooooooooo`]
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${zaltin} `)
}
				



//==========FIM DOS CMD SEM PREFIXO========\\

} catch (erro) {
console.log(erro)
}})

laura.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}
if(update.isNewLogin) {
console.log(`conectado com sucesso`)
}})}
ligarbot()


//atualização de pastas ou arquivos

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono/config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./laura/servidor/servidor.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O servidor foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('Um dos menus foi editada, irei reiniciar...');
process.exit()
}
})


fs.watchFile('./arquivos', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('Um dos menus foi editada, irei reiniciar...');
process.exit()
}
})

 
   
