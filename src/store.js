import thunk from 'redux-thunk'
import global from './reducers/global.jsx'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
    global
})

export default createStore(rootReducer, composeEnhancers(middleware))