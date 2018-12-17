
import express from 'express'
import path from 'path'
// import serverRenderer from './middleware/renderer'

const server = express()
const PORT = process.env.PORT || 8080

server.use(express.static(path.join(__dirname, '../build')))

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })