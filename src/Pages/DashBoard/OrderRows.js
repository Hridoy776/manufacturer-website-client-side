import React from 'react';

const OrderRows = ({ order, index }) => {
    const { name, email, quantity } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
        </tr>
    );
};

export default OrderRows;