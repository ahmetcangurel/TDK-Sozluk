const reducers = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FAVORITE_LIST':
            return { ...state, favoriteList: action.payload }

        default:
            return state
    }
}

export default reducers