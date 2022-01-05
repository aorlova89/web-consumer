const FILTERS_INITIAL_STATE = {
    sorting: 'No Sorting',
    shipping: 'Delivery',
    cuisines: ['All']
}

function reducer(state = FILTERS_INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FILTER':
            return {...state, [action.payload.filter]: action.payload.value};
        default:
            return state;
    }
}

export default reducer;
