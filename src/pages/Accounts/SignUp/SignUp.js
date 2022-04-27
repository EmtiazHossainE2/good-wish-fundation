import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { Button, Form } from 'react-bootstrap';
import SocialAccount from '../SocialAccount/SocialAccount';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init'
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';

const Signup = () => {
    const navigate = useNavigate()

    // 
    const [yourName, setYourName] = useState({ value: "", error: "" })
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [terms, setTerms] = useState(false)

    //react firebase hook 
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //handleProfile 
    const handleName = event => {
        const nameValue = event.target.value
        setYourName({ value: nameValue, error: "" });
    }
    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        console.log(emailValue);
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }

    //handle password
    const handlePassword = event => {
        const passwordValue = event.target.value
        console.log(passwordValue);
        if (passwordValue.length < 6) {
            setPassword({ value: "", error: "Password must be 6 character or more" });
        }
        else if (!/(?=.*[A-Z])/.test(passwordValue)) {
            setPassword({
                value: "", error: "Password must contain a capital letter",
            });
        }
        else {
            setPassword({ value: passwordValue, error: "" });
        }
    }

    //loading
    if (loading) {
        return <Loading />
    }

    //error
    if (createError) {
        toast.error(`Something is wrong`, { id: "error" });
    }

    // handle Submit
    const handleSubmit = event => {
        event.preventDefault()

        //validation check
        if (yourName.value === "") {
            setYourName({ value: "", error: "Name is required" });
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (email.value && password.value) {
            //create user 
            createUserWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    toast.success("Welcome Education Hub", { id: "success" });
                    navigate(from)
                })
        }
    }



    return (
        <div className='login-bg-img py-5'>
            <div className="account-container container py-5 ">
                <div className=" text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to Stay With us</h5>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name" onBlur={handleName} className='py-2' name='name' placeholder="Enter name" />
                        </Form.Group>
                        {yourName?.error && <p className="text-danger"> {yourName.error}</p>}
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" onBlur={handleEmail} className='py-2' name='email' placeholder="Enter email" />
                        </Form.Group>
                        {email?.error && <p className="text-danger"> {email.error}</p>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" onBlur={handlePassword} className='py-2' name='password' placeholder="Password" />
                        </Form.Group>
                        {password?.error && <p className="text-danger"> {password.error}</p>}
                        <div className='d-flex terms-condition   '>
                            <div className=' mb-3 '>
                                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                                <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                            </div>
                        </div>
                        <Button disabled={!terms} variant="primary" type="submit" className='w-100 fs-5'>
                            Register
                        </Button>
                    </Form>
                    <p className='toggle-page pt-2'>
                        Already have an account  ?{" "}
                        <span onClick={() => navigate("/login")}>Please Login</span>
                    </p>
                    <SocialAccount></SocialAccount>
                </div>
            </div>
        </div>
    );
};

export default Signup;