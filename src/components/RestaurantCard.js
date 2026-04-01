import { IMG_URL } from "../utils/config";

const RestaurantCard = (props) => {
    
    const {slaString} = props.restaurantData["info"].sla;
    const {name,cloudinaryImageId,cuisines,avgRating} = props.restaurantData["info"];
    
    
  return (
    <div className="restaurant-card w-56 bg-gray-200 h-80 flex flex-col p-2 hover:border justify-between">
      <img
        className="restaurant-img  w-full h-40"
        alt={name}
        src={IMG_URL+cloudinaryImageId}
      ></img>
      <h2 className="font-semibold"> {name} </h2>
      <h4 style={{ fontWeight: 300 }}>{cuisines.join(", ")}</h4>
      <h4 className="font-semibold">{avgRating} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export const withRecommended = (RestaurantCard) =>{
  return (props) => {
    return <div>
      <label className="absolute bg-black text-white p-2 rounded-br-sm text-sm">Recommended</label>
      <RestaurantCard {...props}/>
    </div>
  }
}

export default RestaurantCard;