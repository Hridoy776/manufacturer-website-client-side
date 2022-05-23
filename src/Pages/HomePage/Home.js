import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Footer from './Footer';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    console.log(tools)
    return (
        <div>
            <Navbar/>
            <Banner/>
            <section>
               <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3  gap-10 p-5'>
                   {
                       tools.map(tool=><Tools
                         key={tool._id}
                         tool={tool}/>)
                   }
               </div>
            </section>
            <Reviews/>
            <section>
                <div className='flex justify-center items-center'>
                <BussinessSummary/>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;