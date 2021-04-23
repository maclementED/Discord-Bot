const discord = require('discord.js');
const client = new discord.Client();
let conn;
let isPlaying = false;
client.once('ready', () => {
    console.log('Bot Online')
})

client.on("voiceStateUpdate", async(oldVoiceState, newVoiceState) => {
    
    if (newVoiceState.channel && !isPlaying) {
        if (newVoiceState.member.voice.channel.name === "Chill Lounge") {
            conn = await newVoiceState.member.voice.channel.join();
        }

        while (conn != undefined) {
            isPlaying = true; 
            const dispatcher = conn.play("animal_crossing.mp3")
            
            await new Promise(r => setTimeout(r, 100*60*1000));
            dispatcher.destroy()

        }
        
        try {
            newVoiceState.member.voice.channel.leave()
        } catch (e) { }
    } else if (oldVoiceState.channel) { // The member disconnected from a channel.
    };
});

client.login("Njk5Mzc1MzU5NTY4NzczMTIw.XpTeDw.3CVh54PJLA73IxFL-4gG3g7A0aQ");