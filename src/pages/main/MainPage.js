import {CuisinesFilters} from "../../components/filters/CuisinesFilters";
import {Restaurant} from "../../components/restaurants/Restaurant";
import {RadioButtonFilters} from "../../components/filters/RadioButtonFilter";

import './main.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../store/filters/thunk";
import {selectRestaurants} from "../../store/restaurants/selectors";


export const MainPage = () => {
    const [show, setShow] = useState(false);

    const shippingOptions = ['Delivery', 'Pickup'];
    const sortingOptions = ['No Sorting', 'Alphabetically', 'By Minimum Order Value', 'Top Rated', 'By Delivery Time'];

    const restaurants = useSelector(selectRestaurants);

    const dispatch = useDispatch();

    useEffect(() => dispatch(getRestaurants()), []);

    return (
        <>
            <div className="header">
                <button className="filters-btn"
                         onClick={() => setShow(true)}>
                    <i className="fas fa-sliders-h"></i>
                </button>
                <span>Restaurants</span>
            </div>
            <div className="main-context">
                <div className={`filters ${show && "mobile-filters"}`}>
                    <RadioButtonFilters
                        filterName="Sort By"
                        filterType="sorting"
                        filterValues ={sortingOptions}
                        filterClassName="sort-by-options"
                        isModalOpened = {show}
                    />
                    <RadioButtonFilters
                        filterName="Shipping"
                        filterType="shipping"
                        filterValues ={shippingOptions}
                        filterClassName="shipping-options"
                        isModalOpened = {show}
                    />
                    <CuisinesFilters/>
                    <button className="apply-filters-btn"
                            onClick={() => {
                                dispatch(getRestaurants());
                                setShow(false)}}>
                        Apply Filters
                    </button>
                </div>
                <div className="restaurants">
                    {restaurants.map(restaurant => {
                        return (
                            <Restaurant
                                id={restaurant.id}
                                name={restaurant.name}
                                logo={restaurant.restaurantLogo}
                                cuisines={restaurant.cuisines}
                                shipping={restaurant.shipping}
                                info={restaurant.info}
                            />
                        )})
                    }
                </div>
            </div>
        </>
    );

}
