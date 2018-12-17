
const express = require('express')
const path = require('path')
const server = express()
const PORT = process.env.PORT || 8080

server.use(express.static(path.join(__dirname, 'build')))

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })