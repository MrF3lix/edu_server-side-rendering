import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider as ReduxProvider } from 'react-redux'
import path from 'path'
import fs from 'fs'

import App from '../../src/components/app'
import data from '../../data/state.json'


export default store => (req, res, next) => {
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err)
            return res.status(404).end()
        }

        let metaTags = Object.keys(data.global.meta).map(key => {
            return { property: key, content: data.global.meta[key] }
        })

        const html = ReactDOMServer.renderToString(
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>
        )


        const reduxState = JSON.stringify(store.getState())
        
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
            .replace(
                '</head>',
                `
                    ${metaTags.map(tag => { return `<meta property="${tag.property}" content="${tag.content}">` }).join('')}
                    </head>
                `
            ).replace(
                '</body>',
                `
                <script type="application/ld+json">
                    ${JSON.stringify(data.global.sd)}
                </script>
                </body>
                `
            )
            .replace('"__SERVER_REDUX_STATE__"', reduxState)
        )
    })
}