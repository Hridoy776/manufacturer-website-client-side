import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import Loading from '../Shared/Loading';
import UseToken from '../../Hooks/UseToken';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token]=UseToken(user)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])
    if (loading || updating) {
        return <Loading />
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const number = e.target.number.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,number)
       await  createUserWithEmailAndPassword(email, password)
       await updateProfile({ displayName: name,phoneNumber:number, })
    }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center '>
            <p className='text-primary text-center text-4xl'>sign in</p>
            <div className=' card shadow-xl'>
                <form onSubmit={handleSignUp} class="card-body w-[400px] mx-auto">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Number</span>
                        </label>
                        <input type="number" placeholder="number" name='number' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="address" name='address' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p>already have an account? <Link to='/login'>please login</Link></p>
                    </div>
                    <div class="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="signUp" />
                    </div>
                </form>
            </div>
            <div class="divider w-[400px] mx-auto mt-10">OR</div>
            <SocialLogin />
        </div>
    );
};

export default SignUp;