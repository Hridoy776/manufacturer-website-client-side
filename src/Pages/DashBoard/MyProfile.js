import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user.email)
    const { data: myInfo, isLoading } = useQuery('user', () => fetch(`http://localhost:5000/user/${user.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    console.log(myInfo)
    return (
        <div>
            my profile
            <p>name:{myInfo?.email}</p>
        </div>
    );
};

export default MyProfile;