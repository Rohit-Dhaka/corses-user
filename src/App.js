
import React, { useState } from 'react';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import Couriers from './components/Couriers';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import UpdateUserName from './components/UpdateUserName';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const addToCart = (courier) => {
        setCartItems((prevCart) => [...prevCart, courier]);
    };

    const removeFromCart = (courier) => {
        setCartItems((prevCart) => prevCart.filter(item => item.courseId !== courier.courseId));
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/userlogin'); // Redirect to login page after logout
    };

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                
                <Route path='/updateUsername' element={<UpdateUserName />} />
                <Route path='/usersignup' element={<UserSignup />} />
                <Route path='/userlogin' element={<UserLogin onLogin={handleLogin} />} />
                <Route path='/couriers' element={isLoggedIn ? <Couriers addToCart={addToCart} /> : <Navigate to='/userlogin' />} />
                <Route path='/cart' element={isLoggedIn ? <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> : <Navigate to='/userlogin' />} />
            </Routes>
        </div>
    );
};

export default App;