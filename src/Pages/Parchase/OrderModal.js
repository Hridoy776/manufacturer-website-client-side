import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({ tool, userinformation }) => {

    const { minQuantity } = tool;
    const [user] = useAuthState(auth)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
    
        const order = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            quantity: data.quantity,
            productName: tool.name,
            price: parseInt(tool.price) * parseInt(data.quantity),
        }
        
        fetch(`https://tranquil-brook-25862.herokuapp.com/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('successfully order complete')
                    navigate('/')

                }


            })

    };
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
                        {/* register your input into the hook by invoking the "register" function */}

                        <div className="form-control mt-3">
                            <input defaultValue={user?.displayName} type="text" className="input input-bordered" {...register("name")} readOnly />
                        </div>
                        <div className="form-control mt-3">
                            <input defaultValue={user?.email} type="text" className="input input-bordered" {...register("email")} readOnly />
                        </div>
                        <div className="form-control mt-3">
                            <input required type="text" placeholder='address' className="input input-bordered" {...register("address")} />
                        </div>
                        <div className="form-control mt-3">
                            <input required type="text" placeholder='phone' className="input input-bordered" {...register("phone")} />
                        </div>
                        <div className="form-control mt-3">
                            <input required defaultValue={minQuantity} type="text" className="input input-bordered" {...register("quantity", {
                                min: {
                                    value: minQuantity,
                                    message: 'please try to order minimum 1000' // JS only: <p>error message</p> TS only support string
                                },
                                max: {
                                    value: 2000,
                                    message: 'you can not order more than available quantity'
                                },
                                onChange: (e) => {

                                }
                            })} />
                            {errors.quantity?.type === "min" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.quantity.message}
                                </span>
                            )}
                            {errors.quantity?.type === "max" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.quantity.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control mt-3">
                            <input className='btn btn-primary' type="submit" value='confirm' disabled={errors?.quantity?.message} />
                        </div>







                    </form>
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;