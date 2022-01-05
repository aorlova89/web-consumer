const RESTAURANTS_INITIAL_STATE = []

function reducer(state = RESTAURANTS_INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
