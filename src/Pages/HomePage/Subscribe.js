import React from 'react';

const Subscribe = () => {
    return (
        <div className="   grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center">
            <div className=' '>
                <div className='w-full  h-[400px] flex flex-col items-center justify-center'>
                    <div className="form-control border-b border-secondary w-[80%] mx-auto">

                        <input type="text" placeholder="email" className="input text-xl" />
                        
                    </div>
                    <div className="form-control border-b border-secondary w-[80%] mx-auto mt-6">

                        <input type="text" placeholder="password" className="input  text-xl" />

                    </div>
                    <div className=" w-[80%] mx-auto  mt-6">
                        <button className="btn btn-primary  text-xl ">Subscribe now</button>
                    </div>
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