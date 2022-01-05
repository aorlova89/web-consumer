import { createSelector } from 'reselect'

const appState = state => state

export const selectRestaurants = createSelector(
    appState,
    appState => appState.restaurants
)
