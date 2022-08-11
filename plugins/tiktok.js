let handler = async(m,{text, conn}) => {
if (!text) throw 'masukkan link nya'
let p = await require('caliph-api').downloader.tiktok(text)
let nih = `*TIKTOK DOWNLOADER*

▶ ${json.info[0].playCount} Views
❤ ${json.info[0].diggCount} Likes
🔁 ${json.info[0].shareCount} Shares
💬 ${json.info[0].commentCount} Comments
🎵 ${json.info[0].musicMeta.musicName} by ${json.info[0].musicMeta.musicAuthor}
- *By:* ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})
- *Desc:*
${txt}
  `.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttk)$/i

module.exports = handler
