import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRows from './OrderRows';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading,refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("access-token")}`
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
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>quantity</th>
                        <th>payment</th>
                        <th>order cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <OrderRows order={order} index={index}
                        refetch={refetch} key={order._id} />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;