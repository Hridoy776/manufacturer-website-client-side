import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AllOrderRows from './AllOrderRows';

const ManageAllOrder = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://tranquil-brook-25862.herokuapp.com/allorder/${user.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        
                        <th>User</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Shipment</th>   
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <AllOrderRows
                            order={order}
                            index={index}
                            refetch={refetch}
                            key={order._id} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;