import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useTools from '../../Hooks/useTools';

const ManageProduct = () => {
    const [tools,refetch] = useTools('http://localhost:5000/tools')

    const handleDElete=(id)=>{
        
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

         fetch(`http://localhost:5000/tool/${id}`,{
             method:'DELETE',
             headers:{
                 'content-type':'application/json'
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
    return (
        <div className='min-h-screen'>
            {tools.length}

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool,index) => <tr key={tool._id}>
                                <td>{index + 1}</td>
                                <td><div class="avatar">
                                    <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={tool.img} alt='' />
                                    </div>
                                </div></td>
                                <th>{tool.name}</th>
                                <td><button onClick={()=>handleDElete(tool._id)} className='btn btn-primary  btn-xs'>delete</button></td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;