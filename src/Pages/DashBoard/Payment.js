import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2BWeGqC6u9CFvqa03umvlhC920kwNye8aK16yuYUelTPy1BgpEZIteq85TQ4E8fvRrD95g1kiW2g54Lfk0n10a00HW7Ezofd');
const Payment = () => {
    const { id } = useParams();
    console.log(id)
    const { data: order,error, isLoading } = useQuery(['order', id], () => fetch(`http://localhost:5000/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("access-token")}`
        }
    }).then(res => res.json()))
    console.log(order)
    console.log(error)
    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div className="hero min-h-screen ">
            <div className="w-full">
                <div className="card mb-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">{order.productName}</h2>
                        <p>you have to pay:{order.price} tk</p>

                    </div>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='card-body'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;