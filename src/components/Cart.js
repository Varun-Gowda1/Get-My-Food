import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {

    const cartList = useSelector((store)=>store.cart.items);
    return <div className="mt-10 w-full p-10">
        <h1 className="font-bold text-center text-4xl"> Cart</h1>

        <div className="mt-20">
            {
                cartList.map((item,idx) => {
                   return <ItemList key={idx} item={item} fromCart={true}/>
                })
            }
        </div>
    </div>
}

export default Cart;