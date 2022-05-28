import React from 'react';

const Service = () => {
    return (
        <div className='lg:flex items-center justify-center p-3'>
            <div className='lg:w-[40%] p-8' >
                <p className='text-3xl text-primary font-medium my-3'>who we are </p>
                <p className='text-5xl '>quality & intrigity service manufacturer</p>
            </div>
            <div className='lg:w-1/2 border-primary border-l-8 p-10' >
                <p className='text-2xl'>we are so dedicate to give service to our client.</p>
                <p className='link link-primary text-xl font-medium my-3'>learn more </p>
            </div>
        </div>
    );
};

export default Service;