
import express from 'express'
import path from 'path'
import serverRenderer from './middleware/renderer'

const server = express()
const router = express.Router()
const PORT = process.env.PORT || 8080

router.use('*', serverRenderer)
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))

server.use(router)
server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })