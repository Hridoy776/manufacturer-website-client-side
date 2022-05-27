import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
const OrderRows = ({ order, index,refetch }) => {
    const { _id, productName, email, quantity, price, paid } = order;

    const cancelOrder=()=>{

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
                toast.success('your order has been canceled')
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
    refetch()
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td><>
            {(price && !paid) && <Link to={`/dashboard/myorder/payment/${_id}`}><button className="btn btn-outline btn-xs btn-secondary">pay</button></Link>}
            {(price && paid) && <span className="text-primary">paid</span>}
            </></td>
            <td>{(price && !paid) && <button onClick={cancelOrder} className='btn btn-outline btn-xs btn-secondary'>cancel</button>}</td>
            
        </tr >
    );
};

export default OrderRows;