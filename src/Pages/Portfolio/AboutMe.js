import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='p-5 flex w-[75%] mx-auto justify-center flex-col items-center my-5'>
            <p className='text-4xl font-medium text-primary my-3'>about me</p>
            <div className='lg:w-1/2 shadow-lg p-3 rounded-lg'>
                <p className=' text-2xl lg:text-3xl font-medium text-primary my-3' >Name:MD. RAKIB HASAN HRIDOY</p>
                <p className='text-xl lg:text-2xl lg:font-medium  my-3'>Email:<small>rakibhasanhridoy776@gmail.com</small></p>
                <p className='text-2xl lg:text-3xl font-medium my-3'>education:<span className='text-2xl font-medium text-primary text-justify'>student of HSTU.Bachalor of science in chemistry .3rd year</span></p>
            </div>
        </div>
    );
};

export default AboutMe;