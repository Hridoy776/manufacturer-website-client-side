import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = (data) => {
        const neReview = {
            name: data.name,
            email: data.email,
            ratings: data.rating,
            description: data.description
        }
        fetch('https://tranquil-brook-25862.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(neReview)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('thanks for your valuable reviews')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
                {/* register your input into the hook by invoking the "register" function */}

                <div className="form-control mt-3">
                    <input defaultValue={user?.displayName} type="text" className="input input-bordered" {...register("name")} readOnly />
                </div>
                <div className="form-control mt-3">
                    <input defaultValue={user?.email} type="text" className="input input-bordered" {...register("email")} readOnly />
                </div>
                <div className="form-control mt-3">
                    <input type="number" placeholder='rating' className="input input-bordered" {...register("rating")} />
                </div>
                <div className="form-control mt-3">
                    <input type="text" placeholder='short description' className="input input-bordered" {...register("description")} />
                </div>

                <div className="form-control mt-3">
                    <input className='btn btn-primary' type="submit" value='save' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;