import React from 'react';

const BlogInformation = () => {
    return (
        <div className='min-h-sceen grid lg:grid-cols-2 grid-cols-1  '>
            <div className="lg:w-3/5 w-[90%] mt-40 mb-4 mx-auto border p-5 border-primary rounded-lg">
                <p className='text-3xl text-primary font-medium mb-5'>optimiszing perfomance in a react application</p>
                <p className='text-xl'>i will optimize perfomance ina react application using production build,profiling components with devtool profiler,avoiding reconciliation,making sure of immutable data,using dependency optimization,using react.fragment to aviod additonal html element wrapper,avoiding inline function defination in the render function.</p>
            </div>
            <div className="lg:w-3/5 w-[90%] mt-40 mb-4 mx-auto border p-5 border-primary rounded-lg">
                <p className='text-3xl text-primary font-medium mb-5'>different ways to manage a state in a react application</p>

                <p className='text-xl'>There are 4 different ways to manage state in react application.they are local state, global state, server state, url state.Local state is manage by using useState hook.global state is manage by using context api.url state is mange by using useLocation or useHistory.</p>
            </div>
            <div className="lg:w-3/5 w-[90%] my-4 mx-auto border p-5 border-primary rounded-lg">
                <p className='text-3xl text-primary font-medium mb-5'>how does Prototypical Inheritance work</p>

                <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
            <div className="lg:w-3/5 w-[90%] my-4 mx-auto border p-5 border-primary rounded-lg">
                <p className='text-3xl text-primary font-medium mb-5'>why i do not set the state directly in react</p>

                <p className='text-xl'>I do not set products=[...] instead of having const = [products, setProducts]=useState([]) beacuse if i update it directly it may just replace the update i made can not re render the components.i will lose control the state across all components.When i directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
            </div>
            <div className="lg:w-3/5 w-[90%] my-4 mx-auto border p-5 border-primary rounded-lg">
                <p className='text-3xl text-primary font-medium mb-5'>why i do not set the state directly in react</p>

                <p className='text-xl'>unit testing is testing individual component of the software programo or application.The main purpose is to check all the individul part of program or application is working as intended.there are many advantage of unit testing some are improve the quality of code.find software bug easily.debuging process can be simplified.it will reduce the costs.</p>
            </div>

        </div>
    );
};

export default BlogInformation;