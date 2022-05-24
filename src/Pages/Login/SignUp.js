import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='flex flex-col h-screen justify-center items-center '>
            <p className='text-primary text-center text-4xl'>login</p>
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
            <SocialLogin/>
        </div>
    );
};

export default SignUp;