import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import './Logout.css'; // Import the CSS file

function Logout() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e, field) => {
        setCredentials({ ...credentials, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get("token"); // Retrieve the token from cookies
            if (!token) {
                console.log("User is not logged in.");
                return;
            }

            const response = await axios.post(
                "http://localhost:4006/admin/logout",
                {},
                { headers: { Authorization: `Bearer ${token}` } } // Send token in the Authorization header
            );
            console.log("Response:", response.data);

            // Remove the token cookie upon successful logout
            Cookies.remove("token");
            console.log("Token removed.");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="logout-container">
            <div className="logout-form">
                <form onSubmit={handleSubmit}>
                    <h3>Sign up</h3>
                    <p>Enter your email and password</p>
                    <a>
                        <img
                            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                            alt=""
                        />
                        Sign in with Google
                    </a>
                    <div className="divider">
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field"
                        onChange={(e) => handleChange(e, "username")}
                    />
                    <label>Password*</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        onChange={(e) => handleChange(e, "password")}
                    />
                    <button
                        className="submit-button"
                        onClick={handleSubmit}
                    >
                        Log Out
                    </button>
                    <p className="register-link">
                        Already registered?{" "}
                        <a href="/login">
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Logout;
