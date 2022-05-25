import React from 'react';

const OrderRows = ({ order, index }) => {
    const { name, email, quantity } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td><button class="btn btn-outline btn-xs btn-secondary">pay</button></td>
        </tr>
    );
};

export default OrderRows;