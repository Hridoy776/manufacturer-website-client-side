import React from 'react';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import BlogInformation from './BlogInformation';

const Blog = () => {
    return (
        <div>
            
            <Navbar />
            <div >
            <BlogInformation/>

            </div>
            <Footer/>
        </div>
        
    );
};

export default Blog;