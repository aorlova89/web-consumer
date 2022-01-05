import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../store/filters/actions";
import {selectCuisines} from "../../store/filters/selectors";
import {getRestaurants} from "../../store/filters/thunk";

export const CuisinesFilters = () => {
    let cuisines = ['All', 'Japanese', 'Pizza', 'Italian', 'Sushi', 'Burger', 'French'];

    const selectedCuisines = useSelector(selectCuisines);

    const dispatch = useDispatch();

    function setCuisines(cuisines) {
        dispatch(setFilter("cuisines", cuisines));
        dispatch(getRestaurants());
    }

    const handleOnChangeTmp = (e) => {
        if (selectedCuisines.includes('All')) {
            setCuisines([e.target.value]);
        } else {
            if (e.target.value === 'All'){
                setCuisines(['All']);
            } else {
                if (selectedCuisines.includes(e.target.value)){
                    setCuisines(selectedCuisines.filter( item => item !== e.target.value ));
                    if (selectedCuisines.length === 1 && selectedCuisines[0] !== 'All') {
                        setCuisines(['All']);
                    }
                }
                else {
                    setCuisines([e.target.value, ...selectedCuisines]);
                }
            }
        }
    };

    return (
        <div className="cuisines-options">
            <h4>Cuisines</h4>
            <ul className="cuisines-list">
                {cuisines.map((name, index) => {
                    return (
                        <li key={index}>
                            <div className="cuisine-list-item">
                                <input
                                    type="checkbox"
                                    name={name}
                                    id={`custom-checkbox-${index}`}
                                    value={name}
                                    checked={selectedCuisines.includes(name)}
                                    onChange={handleOnChangeTmp}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                        </li>
                    );
                })}
            </ul>


        </div>
    );
}
