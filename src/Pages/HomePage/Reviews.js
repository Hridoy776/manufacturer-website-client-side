import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReactStars from "react-rating-stars-component";
const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map((review, index) => <div class="card w-96 bg-primary text-primary-content">
                    <div key={index} class="card-body">
                        <h2 class="card-title">{review.name}</h2>
                        <p><ReactStars
                            edit={false}
                            count={5}
                            value={review.ratings}
                            size={24}
                            color='gray'
                        /></p>
                        <p>{review.description}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviews;