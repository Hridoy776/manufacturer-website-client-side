


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
import ManageAllOrder from './Pages/DashBoard/ManageAllOrder';
import ManageProduct from './Pages/DashBoard/ManageProduct';
import AddProduct from './Pages/DashBoard/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin'
import Payment from './Pages/DashBoard/Payment';
import Wellcome from './Pages/DashBoard/Wellcome';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';
function App() {
  return (
    <div className='max-w-8xl mx-auto'>
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
            <Route  path='myorder' element={<MyOrder/>}/>
            <Route path='addreview' element={<AddReview/>}/>
            <Route path='myprofile'  element={<MyProfile/>}/>
            <Route index  element={<Wellcome/>}/>
            <Route path='myorder/payment/:id' element={<Payment/>}/>
            <Route path='makeadmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}/>
            <Route path='manageAllOrder' element={<RequireAdmin><ManageAllOrder/></RequireAdmin>}/>
            <Route path='manageProducts' element={<RequireAdmin><ManageProduct/></RequireAdmin>}/>
            <Route path='addAProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}/>
            
            </Route>
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/blog' element={<Blog/>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
