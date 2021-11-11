let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [089526350998]
│ • TRI             [089516809533]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [089516809533]
│ • https://saweria.co/admin
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
