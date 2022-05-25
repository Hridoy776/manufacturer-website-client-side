import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import MyOrder from './MyOrder';

const DashBoard = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div class="drawer drawer-mobile">
                    <input id="dashBoard" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        dashBoard
                        <Outlet/>


                    </div>
                    <div class="drawer-side">
                        <label for="dashBoard" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                            <li>
                                <Link to='/dashboard'>my order</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/addreview'>add a review</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/myprofile'>my profile</Link>
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