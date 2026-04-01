import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({item,fromCart}) => {
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleItem = (item) => {
        if(!fromCart){
            handleAddItem(item);
        }else{
            handleRemoveItem(item);
        }
    }
    return (
        <div>
             <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold">
                    {item.card.info.name}
                  </h1>
                  <h3 className="text-xl font-semibold">
                    ₹ {item.card.info.price / 100}
                  </h3>
                  <span>
                    ★ {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                </div>
                <div>
                  <button onClick={() => handleItem(item)} className="bg-black text-white w-20 h-10 cursor-pointer ">
                    {fromCart?"Remove":"Add"}
                  </button>
                </div>
              </div>
              <div className="h-[1px] bg-gray-300 w-full my-3"></div>
        </div>
    )
}

export default ItemList;