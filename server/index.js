
import express from 'express'
import path from 'path'
import serverRenderer from './middleware/renderer'
import configureStore from '../src/store'
import { updateIsLoaded } from '../src/actions/global-actions'

const server = express()
const router = express.Router()
const PORT = process.env.PORT || 8080

const actionIndex = (req, res, next) => {
    const store = configureStore()
    store.dispatch(updateIsLoaded(true))
    serverRenderer(store)(req, res, next)
}

router.use('*', actionIndex)

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))

server.use(router)
server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })