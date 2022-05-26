import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import MyOrder from './MyOrder';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className="drawer drawer-mobile">
                    <input id="dashBoard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        dashBoard
                        <Outlet />


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashBoard" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                            <li>
                                {
                                    !admin && <>
                                        <Link to='/dashboard/addreview'>add a review</Link>
                                        <Link to='/dashboard'>my order</Link>

                                    </>
                                }

                            </li>
                            <li>
                                <Link to='/dashboard/myprofile'>my profile</Link>
                            </li>
                            <li>
                                {
                                    admin && <>
                                        <Link to='/dashboard/makeadmin'>make admin</Link>
                                        <Link to='/dashboard/manageAllOrder'>manage all order</Link>
                                        <Link to='/dashboard/addAProduct'>add a product</Link>
                                        <Link to='/dashboard/manageProducts'>manage product</Link>
                                    </>
                                }
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DashBoard;