import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider as ReduxProvider } from 'react-redux'
import App from './components/app'
import configureStore from '../src/store'

const Store = configureStore(window.REDUX_STATE || {})

const AppBundle = (
    <ReduxProvider store={Store}>
        <App />
    </ReduxProvider>
)

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        )
    })
}