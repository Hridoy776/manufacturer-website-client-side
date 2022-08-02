import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import OrderModal from './OrderModal';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../Shared/Loading';
const Parchase = () => {
    const [user] = useAuthState(auth)

    const [userinformation, setUserInformation] = useState({})
    const { id } = useParams()

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://tranquil-brook-25862.herokuapp.com/tool/${id}`)
        .then(res => res.json()))


    const email = user?.email;

    useEffect(() => {
        fetch(`https://tranquil-brook-25862.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            },
        })
            .then(res => res.json())
            .then(data => setUserInformation(data))
    }, [email])
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Navbar />
            <div className='py-[200px] min-h-screen'>
                <div className="lg:flex justify-center items-center  shadow-2xl">
                    <div className='lg:w-[45%] p-10 lg:border-r-2 border-accent'>
                    <figure><img className='w-full' src={tool.img} alt="Album" /></figure>
                    </div>
                    <div className=" lg:w-[50%] p-10 ">
                        <h2 className="card-title uppercase text-4xl">{tool.name}</h2>
                        <p className='text-3xl my-3'>$<span className='text-secondary'> {tool.price}</span></p>
                        <p className='text-2xl'>quantity:{tool.inStock}</p>
                        <p className='text-2xl'>Min oder quantity:{tool.minQuantity}</p>
                        <p className='max-w-lg text-xl my-4'>{tool.description}</p>
                        <div className="card-actions ">
                            <label htmlFor="order-modal" className="btn btn-outline rounded-none btn-secondary text-white ">click to pay</label>
                        </div>
                    </div>

                    <OrderModal
                        refetch={refetch}
                        userinformation={userinformation}
                        tool={tool} />


                </div>
            </div>

            <div>
                <p>{userinformation.email}</p>
            </div>
            <Footer />
        </div>
    );
};

export default Parchase;