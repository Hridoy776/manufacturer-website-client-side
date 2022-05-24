import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate=useNavigate()
    if(user){
        navigate('/home')
    }
    const handeGoogleSignIn=()=>{
        signInWithGoogle()
    }
    return (
        <div class="form-control mt-6 w-[330px]">
            <button onClick={handeGoogleSignIn} className='btn btn-primary'>google sign in</button>
        </div>
    );
};

export default SocialLogin;