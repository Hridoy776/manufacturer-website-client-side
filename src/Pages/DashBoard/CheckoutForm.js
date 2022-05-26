import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    const { price, _id } = order;
    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json()).then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        })
    }, [])
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

        //  card payment
        setProcessing(true)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message)
            setSuccess('')
            setProcessing(false)
        } else {
            setSuccess('your payment is completed successfully')
            setTransactionId(paymentIntent.id)
            setCardError('')
                const payment={
                    order:_id,
                    transactionId:paymentIntent.id
                }
            fetch(`http://localhost:5000/order/${_id}`,{
                method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            
            setProcessing(false)
        }
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
            {success && <div className='text-green-500'>
                <p>{success}</p>
                <p>your transactionId: {transactionId}</p>
            </div>}
        </>
    );
};

export default CheckoutForm;