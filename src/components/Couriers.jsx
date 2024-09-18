import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Couriers = ({ addToCart }) => {
    const [couriers, setCouriers] = useState([]);
    useEffect(() => {        
        axios.get('http://localhost:3000/courses')
            .then(response => setCouriers(response.data))
            .catch(err => console.error("Error fetching couriers: ", err));
    }, []);
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-[12px] w-full">
                <div>
                    <h2 className='text-[42px] text-[#073E87] font-semibold font-Poppins text-center '>Available Couriers</h2>
                    <div className="flex gap-5 mt-5 flex-wrap">
                        {couriers.map(courier => (
                            <div key={courier.courseId} className="courier-item bg-white  rounded-xl p-4  max-w-[250px] w-full flex  flex-col justify-between">
                                <div>
                                    <img src={courier.img} alt={courier.title} className='w-auto h-[150px] mx-auto ' />
                                    <h3 className=' font-Poppins font-semibold uppercase '>{courier.title}</h3>
                                    <p className='font-Poppins pt-1'>{courier.description}</p>
                                    <p className='text-[#073E87] font-medium '>Price: ${courier.price}</p>
                                </div>
                                <button onClick={() => addToCart(courier)} className='bg-[#073E87] text-white py-1 w-full rounded-lg mt-2 '>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Couriers;