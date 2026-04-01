import { useState,useEffect } from "react";
import { RESTAURANT_LIST_URL } from "./config";
const useFetchedData = () =>{
    const [filteredList,setFilteredList]=useState([])
    const [restaurantList ,setRestaurantList] = useState([]);
       useEffect(()=>{
          fetchList();
        },[])
      
     const fetchList = async()=>{
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    const list = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    setRestaurantList(list);   
    setFilteredList(list) 
  }
  return {filteredList,restaurantList,setFilteredList}
}

export default useFetchedData;