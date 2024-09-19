import React, { useState } from 'react';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';

import Couriers from './components/Couriers';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';



const App = () => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add courier to cart
    const addToCart = (courier) => {
        setCartItems((prevCart) => [...prevCart, courier]);
    };

    // Function to remove courier from cart
    const removeFromCart = (courier) => {
        setCartItems((prevCart) => prevCart.filter(item => item.courseId !== courier.courseId));
    };


    return (
        <div>
            <Navbar />
            {/* <Navbar />
            <UserSignup />
            <UserLogin />



            <Couriers addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}

            <Routes>
                <Route path='/usersignup' element={<UserSignup />} />
                <Route path='/userlogin' element={<UserLogin />} />                
                <Route path='/couriers' element={<Couriers addToCart={addToCart} />} />                
                <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

            </Routes>

        </div>
    );
};

export default App;
