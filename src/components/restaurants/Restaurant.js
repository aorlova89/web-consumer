import './Restaurant.css';

export const Restaurant = (props) => {
    const {id, name, logo, cuisines, shipping, info} = props;

    return (
        <div className="restaurant" id={id}>
            <img src={logo} alt=""/>
            <div className="info">
                <span className="restaurant-name">{name}</span>
                <div className="statistics">
                <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"/>
                    {info.ratings.score.average} ({info.ratings.total})</span>
                    <span className="deliveryTime">
                        <i className="fas fa-clock"/>
                        {shipping.estimatedTime}</span>
                    <span className="minOrder">
                    <i className="fas fa-coins">
                        {info.minimumOrderValue} </i>
                    <i className="fas fa-euro-sign"/>
                    </span>
                </div>
                <span className="cuisinesList">Cuisines: {cuisines.join(', ')}</span>
            </div>
        </div>
    );

}
