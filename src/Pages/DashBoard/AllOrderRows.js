import React from 'react';

const AllOrderRows = ({order,refetch}) => {
    
    const {_id,name, email, productName,paid,status}=order;

    const handleShipping=()=>{
        fetch(`http://localhost:5000/order/shipping/${_id}`,{
                method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("access-token")}`
            }
            
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            refetch()
    }
    
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td><div>
                <>
                <p>{!paid && <span>unpaid</span>}</p>
            <p>{status && <span>{status}</span>} {status && <button className='btn btn-xs btn-primary'
            onClick={handleShipping} 
            disabled={status==="shipped"}>to ship</button>}</p>
                </>
                </div></td>

        </tr>
    );
};

export default AllOrderRows;