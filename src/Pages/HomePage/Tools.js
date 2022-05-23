import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { name, img, Price, quantity, description } = tool;
    const navigate=useNavigate()
    const handleParchase=()=>{
        navigate('/parchase')
    }
    
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl ">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>price:{Price}</p>
                <p>quantity:{quantity}</p>
                <p>{description}</p>
                <div class="card-actions">
                    <button onClick={handleParchase} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;