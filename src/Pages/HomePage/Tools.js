import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { _id, name, img, price, minQuantity, inStock, description } = tool;
    const navigate = useNavigate()
    const handleParchase = () => {
        navigate(`/parchase/${_id}`)
    }

    return (
        <div className="card max-w-lg bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>price:{price}</p>
                <p>quantity:{inStock}</p>
                <p>mimimum order :{minQuantity}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <button onClick={handleParchase} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;