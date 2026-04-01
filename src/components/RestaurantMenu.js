import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/config";
import { itemCards } from "../utils/menu-demo";
import { useParams } from "react-router";
import { resSpecificList } from "../utils/res-specific-data";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurant = resSpecificList.filter((res) => res.data.cards[2].card.card.info.id === resId);
    console.log(restaurant);
    if(restaurant.length == 0 ) return <h1>No data available</h1>
    const categoriesList = restaurant[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((category) => category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categoriesList);
    
    return (

        <div className="restaurant-menu mt-10 p-10 px-30">
            <div>
            <h1 className="font-bold text-4xl">{restaurant[0].data.cards[0].card.card.text}</h1>
            </div>
            <div>
                <h6>{restaurant[0].data.cards[2].card.card.info.avgRating}</h6>
                <p>{restaurant[0].data.cards[2].card.card.info.cuisines.join(",")}</p>
                <p>{restaurant[0].data.cards[2].card.card.info.sla.slaString}</p>
            </div>
            <div className="mt-20">
             {
                categoriesList.map((category,idx) => {
                   return ( <ItemCategory key={idx} categories={category}/>)
                })
            }
            </div>
      
        </div>
    )
}

export default RestaurantMenu;