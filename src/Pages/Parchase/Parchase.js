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
                <div className="card  shadow-xl">
                    <div>
                    <figure><img className='w-1/4' src={tool.img} alt="Album" /></figure>
                    </div>
                    <div className="card-body ">
                        <h2 className="card-title">{tool.name}</h2>
                        <p>price:{tool.price}</p>
                        <p>quantity:{tool.inStock}</p>
                        <p>Min oder quantity:{tool.minQuantity}</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="order-modal" className="btn modal-button">click to pay</label>
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