import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReactStars from 'react-rating-stars-component';
import user from '../../Asset/image/21104.png'
const ReviewSlider = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://tranquil-brook-25862.herokuapp.com/reviews')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <Swiper

                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    reviews.map((review, index) => <SwiperSlide key={index} className="card  mb-20 shadow-lg border-t-4 border-secondary  ">
                        <div className=" max-w-sm h-[380px] flex justify-center p-5 w-[90%] flex-col m-auto">
                        <span className='text-4xl m-0 opacity-70'>"</span>
                        <h1><ReactStars
                                        edit={false}
                                        count={5}
                                        value={parseInt(review.ratings)}
                                        size={24}
                                        color='gray'
                                    /></h1>
                            <p className='mb-8 text-xl'>{review.description.slice(0,70)}</p>
                            <div className='flex  items-center'>
                                <img className='w-12 rounded-full' src={user} alt="" />
                                <div>
                                    <h2 className="card-title ml-3">{review.name}</h2>
                                    
                                </div>
                            </div>




                        </div>
                    </SwiperSlide>)
                }



            </Swiper>
        </>
    );
};

export default ReviewSlider;