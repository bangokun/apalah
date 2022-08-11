let handler = async(m,{text, conn}) => {
if (!text) throw 'masukkan link nya'
let json = await require('caliph-api').downloader.tiktok(text)
let nih = ` *TIKTOK DOWNLOADER BY CHONIX*

▶ ${json.info[0].playCount} Views
❤ ${json.info[0].diggCount} Likes
🔁 ${json.info[0].shareCount} Shares
💬 ${json.info[0].commentCount} Comments
🎵 ${json.info[0].musicMeta.musicName} by ${json.info[0].musicMeta.musicAuthor}
- *By:* ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})
- *Desc:*
${txt}
  `
let buttons = [
      {buttonId: `.tiktokaudio ${text}`, buttonText: {displayText: 'Get Audio'}, type: 1}
    ]
    let buttonMessage = {
    video: { url: p.nowm },
    fileName: 'tiktoknowm.mp4',
    caption: nih,
    footer: 'Ingin Audio Nya? Cukup Klik Button Di Bawah',
    buttons: buttons,
    headerType: 4

    }  
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })   
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttk)$/i

module.exports = handler
