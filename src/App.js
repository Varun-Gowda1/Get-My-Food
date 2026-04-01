import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Groceries from "./components/Groceries";
import Shimmer from "./components/Shimmer";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Groceries = lazy(()=>import("./components/Groceries"))
const AppLayout = () => {
  const [userInfo,setUserInfo] = useState();
  useEffect(()=>{
    const data = {
      username:"Sai Pradeep"
    }
    setUserInfo(data.username)
  },[])
  return (
    <Provider store={appStore}>
          <UserContext.Provider value={{username:userInfo,setUserInfo}}>
      <div className="app p-4">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>

    
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/groceries",
        element:<Suspense fallback="<h1>Hey its loading still</h1>">
 <Groceries/>
        </Suspense>
      }
    ]
  }
])








// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
//     path:"/cart",
//     element:<Cart/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
