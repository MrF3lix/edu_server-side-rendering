const initialState = {
    isLoaded: false
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_LOADED':
            return {
                ...state,
                isLoaded: action.value
            }
        default:
            return state
    }
}

export default global