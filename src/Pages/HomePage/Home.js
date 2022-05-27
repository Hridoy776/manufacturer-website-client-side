import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Footer from './Footer';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    const [tools] = useTools('https://tranquil-brook-25862.herokuapp.com/tools')

    return (
        <div>
            <Navbar />
            <Banner />
            <section>
                <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3  gap-10 p-5'>
                    {
                        tools.slice(0, 6).map(tool => <Tools
                            key={tool._id}
                            tool={tool} />)
                    }
                </div>
            </section>
            <section>
                <div className='mx-auto'>
                    <Reviews />
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center'>
                    <BussinessSummary />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;