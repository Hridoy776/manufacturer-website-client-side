import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const home=<>
       <NavLink to='/'>home</NavLink>
       <NavLink to='/'>parchase</NavLink>
       <NavLink to='/'>about</NavLink>
       <NavLink to='/'>dashboard</NavLink>
       <NavLink to='/'>review</NavLink>
       <NavLink to='/'>login</NavLink>
    </>
    return (
        <div className="navbar bg-primary max-w-7xl text-white mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{home}</li>
                        
                        
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal w-full p-0">
                    <li>{home}</li>
                    
                </ul>
            </div>
            <img className='w-10 mx-4 rounded-[50%]' src="https://api.lorem.space/image/face?hash=33791" alt='' />
        </div>
    );
};

export default Navbar;