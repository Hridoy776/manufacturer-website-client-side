import React from 'react';

const PortfolioBanner = () => {
    return (
        <div className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Wellcome</h1>
                    <p className="mb-5">This is Md: RAKIB HASAN HRIDOY</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBanner;