import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({ tool, refetch, setProduct }) => {
    const [user] = useAuthState(auth)
    const { minQuantity } = tool;



    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        const order = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            quantity: data.quantity,
            productName: tool.name
        }
        fetch(`http://localhost:5000/order`, {
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




            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
                        {/* register your input into the hook by invoking the "register" function */}

                        <div class="form-control mt-3">
                            <input defaultValue={user?.displayName} type="text" class="input input-bordered" {...register("name")} readOnly />
                        </div>
                        <div class="form-control mt-3">
                            <input defaultValue={user?.email} type="text" class="input input-bordered" {...register("email")} readOnly />
                        </div>
                        <div class="form-control mt-3">
                            <input type="text" placeholder='address' class="input input-bordered" {...register("address")} />
                        </div>
                        <div class="form-control mt-3">
                            <input type="text" placeholder='phone' class="input input-bordered" {...register("phone")} />
                        </div>
                        <div class="form-control mt-3">
                            <input defaultValue={minQuantity} type="text" class="input input-bordered" {...register("quantity", {
                                min: {
                                    value: minQuantity,
                                    message: 'please try to order minimum 1000' // JS only: <p>error message</p> TS only support string
                                },
                                max: {
                                    value: 2000,
                                    message: 'you can not order more than available quantity'
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
                        <div class="form-control mt-3">
                            <input className='btn btn-primary' type="submit" value='confirm' disabled={errors?.quantity?.message} />
                        </div>







                    </form>
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;