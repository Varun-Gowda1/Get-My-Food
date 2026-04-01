import {Link} from 'react-router'
import useUserStatus from '../utils/useUserStatus';
import { useContext } from 'react';
import {UserContext} from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const status = useUserStatus();
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items)
  console.log("At top");
  
  return (
    <>
      <div id="header" className='flex w-12/12 h-10 justify-between items-center border border-black p-6'>
        <div className="logo w-3/12 text-2xl font-bold">
          <h1>GET MY FOOD</h1>
        </div>
           <p className='w-2/12 mx-auto'>
            User Status:{status ? "✅"+"Online":"⭕"+"Offline"}
          </p>
            <p className='w-2/12'>{user.username}</p>
        <div className="nav-item w-6/12">
       
          <ul className='flex justify-end gap-10 p-6'>
            
            <Link to={'/'}>
            <li>Home</li>
            </Link>
            <Link to={'/about'}>
            <li>About Us</li>
            </Link>
            <Link to={'/contact'}>
            <li>Contact Us</li>
            </Link>
            <Link to={"/groceries"}>
            <li>Groceries</li>
            </Link>
            <Link to={"/cart"}>
            <li className='font-bold'>Cart ({cartItems.length + " Items"})</li>
            </Link>
          </ul>
        
        </div>
      </div>
    </>
  );
};
export default Header;