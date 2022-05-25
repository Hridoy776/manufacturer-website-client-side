import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)


    const home = <>
        <NavLink to='/home'>home</NavLink>

        <NavLink to='/'>about</NavLink>
        <NavLink to='/dashboard'>dashboard</NavLink>
        <NavLink to='/'>review</NavLink>
        {
            user ? <button onClick={() => signOut(auth)} className='btn btn-primary'>sign Out</button> : <NavLink to='/login'>login</NavLink>
        }


    </>


    return (
        <div className="navbar bg-primary text-white mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-10 shadow bg-secondary text-secondary-content  rounded-box w-52">
                        <li>{home}</li>


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal w-full p-0 ">
                    <li>{home}</li>

                </ul>
            </div>
            <img className='w-10 mx-4 rounded-[50%]' src="https://api.lorem.space/image/face?hash=33791" alt='' />

            <div className="dropdown">
                <label for="dashBoard" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                
            </div>

           
        </div>
    );
};

export default Navbar;