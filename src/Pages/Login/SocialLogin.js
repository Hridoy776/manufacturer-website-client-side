import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]=UseToken(user)
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