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
import './App.css'
import Details from './components/Details/Details';
import AddCauses from './pages/AddCauses/AddCauses';

const App = () => {
    return (
        <div className='bg-container overflow-hidden ' >
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}> Home </Route>
                <Route path='/details/:detailsId' element={<Details/>}>Details</Route>
                <Route path='/blog' element={<Blog/>}>  </Route>
                <Route path='/events' element={<Events/>}>  </Route>
                <Route path='/donate' element={<Donate/>}>  </Route>
                <Route path='/addcauses' element={<AddCauses/>}>  </Route>
                <Route path='/login' element={<Login/>}>  </Route>
                <Route path='/signup' element={<SignUp/>}>  </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;