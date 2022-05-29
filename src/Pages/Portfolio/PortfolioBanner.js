import React from 'react';

const PortfolioBanner = () => {
    return (
        <div class="hero min-h-screen" style={{background: `url(https://api.lorem.space/image/fashion?w=1000&h=800)`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">A DEDICATED WEB DEVOLOPER.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBanner;