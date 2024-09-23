import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <section>
            <div className="max-w-[1140px] mx-auto px-[12px]">
                <nav className="flex justify-between items-center py-4">
                    <div className="font-Poppins font-bold text-[#073E87] text-[24px]">Logo</div>
                    <div className="menu flex items-center gap-4">
                        <ul className='flex gap-4'>
                            {isLoggedIn && (
                                <>
                                    <li><Link to='/couriers' className='font-Poppins font-medium text-[18px]'>Couriers</Link></li>
                                    <li><Link to='/cart' className='font-Poppins font-medium text-[18px]'>Cart</Link></li>
                                </>
                            )}
                        </ul>
                        {isLoggedIn ? (
                            <button onClick={onLogout} className='text-white font-Poppins bg-[#073E87] rounded-[20px] py-3 px-5'>Logout</button>
                        ) : (
                            <Link to='/userlogin' className='text-white font-Poppins bg-[#073E87] rounded-[20px] py-3 px-5'>Login</Link>
                        )}
                    </div>
                     <Link to='/updateUsername' >update </Link>
                     
                </nav>
            </div>
        </section>
    );
};

export default Navbar;