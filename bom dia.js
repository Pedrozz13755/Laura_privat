if (budy.includes("bom dia") || (budy.includes("Bom dia"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bom dia.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
}

if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa tarde.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (budy.includes("boa noite") || (budy.includes("Boa noite"))){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa noite.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}
