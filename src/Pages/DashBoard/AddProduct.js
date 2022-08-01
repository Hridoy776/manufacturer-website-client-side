import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const newTool = {
            name: data.name,
            price: data.price,
            img: data.img,
            description: data.description,
            inStock: data.inStock,
            minQuantity: data.minQuantity,
        }
        fetch('https://tranquil-brook-25862.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(newTool)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('successfully product added')
                }
            })
    }
    return (
        <div>
            <h1 className='text-4xl text-primary font-medium text-center my-5 uppercase'>add a product</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
                {/* register your input into the hook by invoking the "register" function */}

                <div className="form-control mt-3">
                    <input type="text" placeholder='product name' className="input input-bordered" {...register("name")} />
                </div>
                <div className="form-control mt-3">
                    <input type="number" placeholder='price' className="input input-bordered" {...register("price")} />
                </div>
                <div className="form-control mt-3">
                    <input type="text" placeholder='img' className="input input-bordered" {...register("img")} />
                </div>
                <div className="form-control mt-3">
                    <input type="text" placeholder='description' className="input input-bordered" {...register("description")} />
                </div>
                <div className="form-control mt-3">
                    <input type="number" placeholder='in stock' className="input input-bordered" {...register("inStock")} />
                </div>
                <div className="form-control mt-3">
                    <input type="number" placeholder='minimum quantity' className="input input-bordered" {...register("minQuantity")} />
                </div>
                <div className="form-control mt-3">
                    <input className='btn btn-primary' type="submit" value='save' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;