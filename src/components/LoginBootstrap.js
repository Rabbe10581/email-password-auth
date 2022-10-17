import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {

    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            toast.warning('Please enter your Email address.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast.info('Password reset email sent, please check your email.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <button className='btn btn-primary' type="login">log in</button>
            </Form>
            {success && <p className='text-success'>Logged in successfully.</p>}
            <p><small>New to this site? Please <Link to='/register'>Register</Link ></small></p>
            <p><small>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></small></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LoginBootstrap;