import React from 'react';

const Banner = () => {
    return (
        <div style={{background:`url(https://i.ibb.co/QHLFkdd/abstract-golden-lines-luxury-dark-background-design-1017-24789.webp)`}} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                <img src="https://i.ibb.co/thMbk05/drill-machine-500x500.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='flex-1 text-white'>
                    <h1 className="text-5xl font-bold">Wellcome to DRIL DESTRUCTOR</h1>
                    <p className="py-6">A faithfull manufacturer of drill machine.you can see your tools.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;