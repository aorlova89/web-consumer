import { createSelector } from 'reselect'

const appState = state => state

export const selectFilters = createSelector(
    appState,
    appState => appState.filters
)

export const selectCuisines = createSelector(
    appState,
    appState => appState.filters.cuisines
)
