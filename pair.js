const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SK_HACKER_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_SK_HACKER = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_SK _HACKER.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_SK_HACKER.ev.on('creds.update', saveCreds)
            Pair_Code_By_SK_HACKER.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: "" + b64data });

               let SK_HACKER_TEXT = `
┏━━━━━━━━━━━━━━
┃MASTER MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = Sahan / MASTER MIND_👨🏻‍💻
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vb5pqpiAO7RC8BlVO40H/329
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+923128112507
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || INSTAGRAM = https://www.instagram.com/sahanmaduwantha2006?igsh=YzljYTk1ODg3Zg==
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || FaceBook = https://www.facebook.com/profile.php?id=100089180711131
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ`
 await Pair_Code_By_SK_HACKER.sendMessage(Pair_Code_By_SK_HACKER.user.id,{text:SK_HACKER_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_SK_HACKER.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SK_HACKER_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SK_HACKER_PAIR_CODE()
});
module.exports = router
