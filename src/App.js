


import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
       </Routes>
    </div>
  );
}

export default App;
