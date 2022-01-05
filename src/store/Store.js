import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunk from "redux-thunk";

import filtersReducer from "./filters/reducer";
import restaurantsReducer from "./restaurants/reducer";

const middleware = [thunk];

const reducers = combineReducers(
    {filters: filtersReducer, restaurants: restaurantsReducer});

const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,
    composeEnhancer(applyMiddleware(...middleware)));

export default store;

