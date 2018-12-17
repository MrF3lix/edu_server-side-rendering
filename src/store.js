import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux'

import ReduxThunk from 'redux-thunk'
import global from './reducers/global'

const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore)

const rootReducer = combineReducers({
    global
})

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState)
}