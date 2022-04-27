import React from 'react';
import './SocialAccount.css'
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import apple from '../../../images/social/Apple.png'
import yahoo from '../../../images/social/Yahoo.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import toast from "react-hot-toast";

const SocialAccount = () => {
    const navigate = useNavigate()

    //google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    //facebook
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    //github 
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    //success
    if (googleUser || facebookUser || githubUser) {
        toast.success(`Welcome to Good Wish Foundation `, { id: "welcome" });
        navigate(from)
    }

    // loading 
    if (googleLoading || facebookLoading || githubLoading) {
        return <Loading />
    }

    //error 
    let errorMessage;
    if (googleError || facebookError || githubError) {
        toast.error(`Something is wrong`, { id: "error" });
        errorMessage = <p className='text-danger'>Something is wrong.Try again please
        </p>
    }

    //
    const handleApple = () => {
        toast.error(`Apple Singin not available right now`, { id: "error" });
    }
    const handleYahoo = () => {
        toast.error(`Yahoo Singin not available right now`, { id: "error" });
    }

    return (
        <div >
            <div className='or-style d-flex align-items-center justify-content-center'>
                <div style={{ height: '2px', width: '40%' }} className='line-left d-block bg-dark'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{ height: '2px', width: '40%' }} className='line-right d-block bg-dark'></div>
            </div>
            {errorMessage}
            <div className='social-icon d-flex align-items-center justify-content-center container'>
                <img onClick={() => signInWithGoogle()} src={google} alt="" />
                <img onClick={() => signInWithFacebook()} src={facebook} alt="" />
                <img onClick={handleApple} src={apple} alt="" />
                <img onClick={handleYahoo} src={yahoo} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;