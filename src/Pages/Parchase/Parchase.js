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
    
    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`http://localhost:5000/tool/${id}`)
        .then(res => res.json()))


    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setUserInformation(data))
    }, [email])
    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <Navbar />
            <div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{tool.name}</h2>
                        <p>price:{tool.Price}</p>
                        <p>quantity:{tool.quantity}</p>
                        <div class="card-actions justify-end">
                            <label for="order-modal" class="btn modal-button">open modal</label>
                        </div>
                    </div>
                   
                        <OrderModal refetch={refetch} tool={tool} />
                    
                    
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