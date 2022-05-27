import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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
    const handleDelete=()=>{
        Swal.fire({
            title: 'Are you sure to cancel order?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/order/${_id}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.success(' order has been canceled')
                refetch()
            }
        })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
         
    }
    
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td><div>
                <>
                <p>{!paid && <span>unpaid</span>}</p>
                <p>{!paid && <button onClick={handleDelete} className='btn btn-xs btn-primary'>delete</button>}</p>
            <p>{status && <span>{status}</span>} {status && <button className='btn btn-xs btn-primary'
            onClick={handleShipping} 
            disabled={status==="shipped"}>to ship</button>}</p>
                </>
                </div></td>

        </tr>
    );
};

export default AllOrderRows;