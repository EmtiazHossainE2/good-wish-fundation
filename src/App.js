import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';
import Donate from './pages/Donate/Donate';
import Login from './pages/Accounts/Login/Login';
import SignUp from './pages/Accounts/SignUp/SignUp';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/Shared/NotFound/NotFound';
import Details from './components/Details/Details';
import AddCauses from './pages/AddCauses/AddCauses';
import { Toaster } from 'react-hot-toast';
import './App.css'
import ManageCause from './pages/Accounts/Admin/ManageCause/ManageCause';
import RequireAuth from './pages/Accounts/RequireAuth/RequireAuth';
import Donation from './pages/Donation/Donation';
import Profile from './pages/Accounts/Profile/Profile';

const App = () => {
    return (
        <div className='bg-container overflow-hidden ' >
            <Toaster></Toaster>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/details/:detailsId' element={<Details />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/events' element={<Events />}></Route>
                <Route path='/donate/:detailsId' element={
                    <RequireAuth>
                        <Donation/>
                    </RequireAuth>
                }></Route>
                <Route path='/donate' element={
                    <RequireAuth>
                        <Donate />
                    </RequireAuth>
                }></Route>
                <Route path='/add-causes' element={
                    <RequireAuth>
                        <AddCauses />
                    </RequireAuth>
                }></Route>
                <Route path='/manage-cause' element={
                    <RequireAuth>
                        <ManageCause />
                    </RequireAuth>
                }></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;