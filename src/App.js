


import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Parchase from './Pages/Parchase/Parchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
       <Routes>
         <Route path="/" element={<Home></Home>}/>
         <Route path="/home" element={<Home></Home>}/>
         <Route path="/parchase" element={<Parchase></Parchase>}/>
         <Route path="/login" element={<Login></Login>}/>
         <Route path="/signup" element={<SignUp></SignUp>}/>
       </Routes>
    </div>
  );
}

export default App;
