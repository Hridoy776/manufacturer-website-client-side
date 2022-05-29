import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = UseToken(user)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    if (loading) {
        return <Loading />
    }
    let errorElement;
    if(error){
        errorElement= <p className='text-xl text-red-500'>{error.message}</p>
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='flex flex-col min-h-screen my-auto justify-center items-center '>
            <p className='text-primary text-center text-4xl'>login</p>
            <div className=' card shadow-xl'>
                <form onSubmit={handleLogin} className="card-body w-[350px] lg:w-[400px] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        {errorElement}
                        
                        <p className=''>are you new ?
                             <Link className='text-primary' to='/signup'>please sign up</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="login" />
                    </div>
                </form>
            </div>
            <div className="divider w-[350px] lg:w-[400px] mx-auto mt-10">OR</div>
            <div className='mb-[100px]'>
            <SocialLogin />
            </div>
        </div>

    );
};

export default Login;