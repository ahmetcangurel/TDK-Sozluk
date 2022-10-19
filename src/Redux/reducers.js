import { UPDATE_HOME_ACTION } from "../actions/homeAction"


const reducers = (state, action) => {
    switch (action.type) {
        case 'UPDATE_HOME_ACTION':
            return { ...state, homeData: action.payload }

        default:
            return state
    }
}

export default reducers