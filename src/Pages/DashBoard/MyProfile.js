import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: myInfo, isLoading } = useQuery('user', () => fetch(`https://tranquil-brook-25862.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("access-token")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const onSubmit = data => {

        const information = {
            name: data.name,
            email: data.email,
            education: data.education,
            location: data.location,
            linkedIn: data.linkedIn,
            phone: data.phone,

        }
        console.log(information)
        fetch(`http://localhost:5000/user/information/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('successfully profile updated')
                }
            })
    }
    return (
        <div>
            my profile
            <p>name:{myInfo?.email}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
                {/* register your input into the hook by invoking the "register" function */}

                <div className="form-control mt-3">
                    <input defaultValue={user?.displayName} type="text" className="input input-bordered" {...register("name")} readOnly />
                </div>
                <div className="form-control mt-3">
                    <input defaultValue={user?.email} type="text" className="input input-bordered" {...register("email")} readOnly />
                </div>
                <div className="form-control mt-3">
                    <input type="number" placeholder='phone' className="input input-bordered" {...register("phone")} />
                </div>
                <div className="form-control mt-3">
                    <input type="text" placeholder='education' className="input input-bordered" {...register("education")} />
                </div>
                <div className="form-control mt-3">
                    <input type="text" placeholder='location' className="input input-bordered" {...register("location")} />
                </div>
                <div className="form-control mt-3">
                    <input type="link" placeholder='linked link' className="input input-bordered" {...register("linkedIn")} />
                </div>
                <div className="form-control mt-3">
                    <input className='btn btn-primary' type="submit" value='save' />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;