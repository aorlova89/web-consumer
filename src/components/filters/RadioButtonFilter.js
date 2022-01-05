import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../store/filters/actions";
import {selectFilters} from "../../store/filters/selectors";
import {getRestaurants} from "../../store/filters/thunk";

export const RadioButtonFilters = (props) => {
    const {filterName, filterType, filterValues, filterClassName, isModalOpened} = props;

    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

console.log(isModalOpened + " for " + filterName);

    function setFilterValue(e) {
        dispatch(setFilter(filterType, e.target.value));
        if (!isModalOpened) {
            dispatch(getRestaurants());
        }
    }

    return (
        <div className={filterClassName}>
            <h4>{filterName}</h4>
            {filterValues.map (option => (
                    <label>
                        <input
                            type="radio"
                            value={option}
                            name={filterClassName}
                            checked={filters[filterType] === option}
                            onChange = {setFilterValue}
                        />
                        {option}
                    </label>
                )
            )}
        </div>
    );
}
