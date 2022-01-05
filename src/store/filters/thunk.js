import service from "../../services/RestaurantService";
import {setRestaurants} from "../restaurants/actions";

export function getRestaurants() {
    return function(dispatch, getState) {
        const {sorting, shipping, cuisines} = getState().filters;

        let sortedByShipping = service
            .filterRestaurantsByShipping(service.getRestaurants(), shipping);
        let sortedByCuisines = service
            .filterRestaurantsByCuisines(sortedByShipping, cuisines);
        let sorted = service
            .orderRestaurants(sortedByCuisines, sorting);

        dispatch(setRestaurants(sorted));
    }
}
