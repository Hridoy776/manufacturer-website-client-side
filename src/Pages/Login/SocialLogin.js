import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])

    if (loading) {
        return <Loading />
    }
   
    

    const handeGoogleSignIn = () => {
        signInWithGoogle()
    }
    
    return (
        <div class="form-control mt-6 w-[330px]">
            <button onClick={handeGoogleSignIn} className='btn btn-primary'>google sign in</button>
        </div>
    );
};

export default SocialLogin;