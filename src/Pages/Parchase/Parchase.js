import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';

const Parchase = () => {
    const [user] = useAuthState(auth)
    const [tool, setTool] = useState({})
    const [userinformation,setUserInformation]=useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])

    const email = user?.email;
    
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setUserInformation(data))
    }, [email])

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
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
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