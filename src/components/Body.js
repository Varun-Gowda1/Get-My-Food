import RestaurantCard,{withRecommended} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../utils/config";
import { Link } from "react-router";
import useFetchedData from "../utils/useFetchedData";
import { UserContext } from "../utils/UserContext";

const Body = () => {
  const [inputText,setInputText]= useState("");
  console.log(inputText)
  const RecommendedRestaurant = withRecommended(RestaurantCard)
  const data = useFetchedData();
  const {filteredList,restaurantList,setFilteredList} = data;
  const {username,setUserInfo} = useContext(UserContext);
  return restaurantList.length === 0?<Shimmer/>  :filteredList.length ===0 ?(<h2>
    There is no such reastaurant named <h3>{inputText}</h3>
  </h2>) :(
    <div className="body">
      <div className="filter-btn my-3 flex gap-3 items-center"> 
        <input type="text-area" className="input-box border w-5/12" value={inputText} onChange={(e)=>{
          setInputText(e.target.value)
        }}/>
        <button className="search border px-6 py-1 rounded-sm cursor-pointer bg-emerald-300" onClick={()=>{
          const list = restaurantList.filter((res)=>{
            return res.info.name.toLowerCase().includes(inputText.toLowerCase())
          })
          console.log(list)
          setFilteredList(list)
          setInputText("")
        }}>Search</button>
        <button className="border px-6 py-1 rounded-sm cursor-pointer bg-amber-100" onClick={()=>{ setFilteredList(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4 )) }}>
            Get Highly rated restaurant
        </button>

        <div>
          <input className="border border-black" type="text" value={username} onChange={(e)=> setUserInfo(e.target.value)}>
          </input>
        </div>
         </div>
      <div className="restaurants-container flex flex-wrap mt-10 w-full gap-10 items-end">
         {filteredList.map((restaurant,idx) => <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                {restaurant.info.avgRating > 4.2? <RecommendedRestaurant restaurantData = {restaurant}/>: <RestaurantCard restaurantData = {restaurant}/> } 
         </Link>
         )}
      </div>
    </div>
  );
};
export default Body;