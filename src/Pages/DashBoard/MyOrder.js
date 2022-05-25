import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRows from './OrderRows';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("access-token")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    console.log(orders)
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>payment</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <OrderRows order={order} index={index} key={order._id} />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;