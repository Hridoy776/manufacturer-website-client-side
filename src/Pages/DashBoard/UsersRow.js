import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
    const{email,role}=user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }

        }).then((res) => {
            if (res.status === 403) {
                toast.error("Failed to make an admin");
            }
            return res.json();
        }).then((data) => {
            if (data.modifiedCount > 0) {
                toast.success("successfully made admin ");
                refetch();
            }
        });
    }


    return (

        <tr key={index}>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{!role && <button onClick={makeAdmin} className='btn btn-outline btn-xs btn-primary'>make admin</button>}</td>
            <td>Blue</td>
        </tr>)



}

export default UsersRow;