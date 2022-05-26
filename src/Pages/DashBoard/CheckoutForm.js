import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const {price}= order;
    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`,{
            method:'POST',
            headers: {
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem("access-token")}`
            },
            body:JSON.stringify({price})
        }).then(res=>res.json()).then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

         setCardError(error?.message || '')
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-xs btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        {cardError && <p className='text-orange-500'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;