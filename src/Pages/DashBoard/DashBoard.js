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
            <div className='min-h-screen pt-[80px]'>
                <div className="drawer drawer-mobile ">
                    <input id="dashBoard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center ">
                        <p className='text-6xl mt-3 font-normal text-secondary uppercase'>dashBoard</p>
                        <Outlet />


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashBoard" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-[200px]  uppercase text-secondary bg-base-100 font-medium border-x-2 border-secondary">
                            <li>
                                <Link to='/dashboard'>Welcome</Link>
                            </li>
                            <li>
                                {
                                    !admin && <>
                                        <Link to='/dashboard/addreview'>add a review</Link>

                                        <Link to='/dashboard/myorder'>my order</Link>
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
            
        </>
    );
};

export default DashBoard;