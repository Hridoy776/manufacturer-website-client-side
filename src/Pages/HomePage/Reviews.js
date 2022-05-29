import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReactStars from "react-rating-stars-component";
const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://tranquil-brook-25862.herokuapp.com/reviews')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-3'>
            {
                reviews.map((review, index) => <div key={index} className="card max-w-lg bg-primary text-primary-content">
                    <div  className="card-body">
                        <h2 className="card-title">{review.name}</h2>
                        <div><ReactStars
                            edit={false}
                            count={5}
                            value={parseInt(review.ratings)}
                            size={24}
                            color='gray'
                        /></div>
                        <p>{review.description}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviews;