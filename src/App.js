


import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Parchase from './Pages/Parchase/Parchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/DashBoard/MyOrder';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/parchase/:id" element={
          <RequireAuth>
            <Parchase></Parchase>
          </RequireAuth>} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>}>
            <Route index element={<MyOrder/>}/>
            <Route path='addreview' element={<AddReview/>}/>
            <Route path='myprofile' element={<MyProfile/>}/>
            <Route path='makeadmin' element={<MakeAdmin/>}/>
            </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
