import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie';
import './Login.css'; 

function Login() {

    const [loginUser, setloginUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e, field) => {
        e.preventDefault();
        setloginUser({ ...loginUser, [field]: e.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4006/admin/login', 
            { username: loginUser.username, 
                password: loginUser.password 
            });
            console.log("response", response);
            if (response.status === 200) {
                console.log(response.data);
                Cookies.set('username', loginUser.username);
                console.log('Login successful')

            } else {
                console.error('Login failed');
            }
        } 
        catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Invalid username or password');
            } else {
                console.error('An error occurred while logging in', error);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <form>
                    <h3>Sign in</h3>
                    <p>Enter your email and password</p>
                    <a href="#">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                        Sign in with Google
                    </a>
                    <div className="divider">
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>
                    <label htmlFor="username">Username*</label>
                    <input id="username" type="text" value={loginUser.username} placeholder="Username" onChange={(e) => { handleChange(e, "username") }} />
                    <label htmlFor="password">Password*</label>
                    <input id="password" type="password" value={loginUser.password} placeholder="Enter a password" onChange={(e) => { handleChange(e, "password") }} />
                    <button onClick={handleSubmit}>Sign In</button>
                    <p>Not registered yet? <a href="/login">Create an Account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
