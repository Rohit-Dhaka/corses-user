import React from 'react';
const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-[12px] w-full">
                <div className='w-full'>                    
                    <h2 className='font-Poppins font-bold text-[#073E87] text-[42px] text-center'>Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className='font-Poppins font-semibold text-[28px] text-center '>Your cart is empty</p>
                    ) : (
                        <div>
                            <p className='font-Poppins font-semibold  pb-4 capitalize'>total number of  courses -  {cartItems.length}</p>
                            <ul  className='flex gap-4 flex-wrap'>
                                {cartItems.map((item, index) => (
                                    <li key={index} className='bg-white  rounded-lg p-3 max-w-[200px] w-full flex flex-col justify-between'>
                                        <div>
                                            <img src={item.img} alt="" className='w-auto  items-center mx-auto h-[100px] ' />
                                            <p className="font-Poppins text-[14px] pt-1 font-medium uppercase ">{item.title}</p>
                                            <p className="font-Poppins font-medium py-1">${item.price}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item)} className='w-full bg-red-700 rounded-md text-white font-semibold font-Poppins py-1'>Remove</button>
                                    </li>
                                ))}
                            </ul>
                            <h3 className='text-[#073E87]  font-semibold text-end text-[32px]'>Total: ${totalPrice}</h3>                            
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Cart;
