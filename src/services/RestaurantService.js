import {restaurantList} from '../restaurants-list-mock-data';

class RestaurantService {
    getRestaurants = () => restaurantList.data;

    filterRestaurantsByShipping = (restaurantList, selectedShipping) => {
        return restaurantList.filter(restaurant =>
            restaurant.shipping.type.includes(selectedShipping.toLowerCase()));
    }

    filterRestaurantsByCuisines = (restaurantList, selectedCuisines) => {
        if (selectedCuisines[0] === 'All') {
            return restaurantList;
        } else {
            return restaurantList.filter(restaurant => {
                    let selectedCuisinesToLowerCase =
                        selectedCuisines.map(name => name.toLowerCase());
                    return restaurant.cuisines.some(i => selectedCuisinesToLowerCase.includes(i));
                }
            )
        }
    };

    orderRestaurants = (restaurantList, sorting) => {
        switch (sorting) {
            case 'No Sorting':
                return restaurantList;
            case 'Alphabetically':
                return restaurantList.sort((a, b) =>
                    (a.name > b.name) ? 1
                        : ((b.name > a.name) ? -1 : 0));
            case 'By Minimum Order Value':
                return restaurantList.sort((a, b) =>
                    (a.info.minimumOrderValue > b.info.minimumOrderValue) ? 1
                        : ((b.info.minimumOrderValue > a.info.minimumOrderValue) ? -1 : 0));
            case 'Top Rated':
                return restaurantList.sort((a, b) =>
                    (a.info.ratings.score.average < b.info.ratings.score.average) ? 1
                        : ((b.info.ratings.score.average < a.info.ratings.score.average) ? -1 : 0));
            case 'By Delivery Time':
                return restaurantList.sort((a, b) =>
                    (a.shipping.estimatedTime > b.shipping.estimatedTime) ? 1
                        : ((b.shipping.estimatedTime > a.shipping.estimatedTime) ? -1 : 0));
            default:
                return restaurantList;
        }

    }
}

const service = new RestaurantService();
export default service;
