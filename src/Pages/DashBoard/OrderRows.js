import React from 'react';
import { Link } from 'react-router-dom';

const OrderRows = ({ order, index }) => {
    const { _id, name, email, quantity, price, paid } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-outline btn-xs btn-secondary">pay</button></Link>}</td>
            <td>{(price && paid) && <span class="text-primary">paid</span>}</td>
        </tr >
    );
};

export default OrderRows;