import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem("access-token")}`
                    }
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading]
};

export default useAdmin;