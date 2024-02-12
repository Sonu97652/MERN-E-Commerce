// import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
// import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
// import ProductList from './features/product-list/ProductList';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/LoginPage",
    element: <LoginPage/>,
  },
  {
    path:"/SignupPage",
    element: <SignupPage/>,
  },
  {
    path:"/CartPage",
    element:<CartPage/>,
  },
  // {
  //   path:"/Cart",
  //   element:<Cart/>,
  // },
]);


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
