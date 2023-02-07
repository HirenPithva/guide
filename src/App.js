import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';
import { Route, Routes, Navigate } from 'react-router-dom'
import BreadCrumb from './Components/EntryLevel/BreadCrumb';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import userReducer from './Components/State/Reducers/UserReducer';
import AddProduct from './Components/Product/AddProduct';
import productReducer, { products } from './Components/State/Reducers/ProductReducer';
import { ProductProvider } from './Components/State/Context/ProductContext';
import { useReducer } from 'react';
import ProductPage from './Components/Product/ProductPage';
import ProtectedRoute from './Components/ProtectedRute/ProtectedRoute';
import EditProduct from './Components/Product/EditProduct';
import ProductListing from './Components/Listing/ProductListing';
import { configureStore } from '@reduxjs/toolkit';
import { CartReducer } from './Components/State/Reducers/CartReducer';
import Cart from './Components/Cart/Cart';
import { SearchReducer } from './Components/State/Reducers/SearchReducer';
import { AllUserReducer } from './Components/State/Reducers/AllUsersReducer';

// const store = createStore( userReducer, applyMiddleware(logger, thunk))
const store = configureStore({
  reducer:{
    Cart: CartReducer,
    User: userReducer,
    search: SearchReducer,
    AllUser: AllUserReducer,
  }
})
function App() {
  const [productList, productDispatch] = useReducer(productReducer,products)
  return (
    <Provider store = {store}>
      <ProductProvider value={{ProductList:productList,ProductDispatch:productDispatch}} >
        <div className="App">
          <Navbar></Navbar>
          <Searchbar></Searchbar>
          <Routes>
          <Route path='/' element={<ProtectedRoute/>}>
              {/* <Route path='/' element={<Navigate to='Product'  />}></Route> */}
              <Route path='Cart' element={<Cart/>}></Route>
              <Route path='Product' element={<ProductPage/>}></Route>
              <Route path='Add'  element={<AddProduct/>}></Route>
              <Route path='List'  element={<ProductListing/>}></Route>
              <Route path='Edit/:productID'  element={<EditProduct/>}></Route>
            </Route>
          <Route path='Login' element={<BreadCrumb/>}></Route>
          <Route path='Register' element={<BreadCrumb/>}></Route>

            
          </Routes>
        </div>
      </ProductProvider>
    </Provider>
  );
}

export default App;
