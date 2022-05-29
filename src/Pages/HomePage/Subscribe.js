import React from 'react';

const Subscribe = () => {
    return (
        <div className="   grid grid-cols-1 lg:grid-cols-2 gap-32 justify-center">
            <div className='card-body w-[70%] mx-auto  bg-purple-500 justify-items-center'>
                <div className="form-control w-[80%] mx-auto">

                    <input type="text" placeholder="email" className="input input-bordered text-xl" />
                </div>
                <div className="form-control w-[80%] mx-auto mt-6">

                    <input type="text" placeholder="password" className="input input-bordered text-xl" />

                </div>
                <div className="form-control w-[80%] mx-auto  mt-6">
                    <button className="btn btn-primary  text-xl ">Subscribe now</button>
                </div>
            </div>
            <div className='bg-[#000000c3] mx-auto w-[70%] text-white p-10'>
                <p className='lg:text-4xl text-2xl uppercase font-medium'>dont hasitate to conect us</p>
                <div className='my-3 p-3'>
                    <p className='text-3xl'>our office</p>
                    <p className='text-xl my-2'>325 Business, Evenue, Dhaka</p>
                </div>
                <div className='my-3 p-3'>
                    <p className='text-3xl'>mail us</p>
                    <p className='text-xl my-2'>support@mail.com</p>
                </div>
                <div className='my-3 p-3'>
                    <p className='text-3xl'>call us</p>
                    <p className='text-xl my-2'>01010111</p>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;