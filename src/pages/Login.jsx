import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            const response = await fetch(`https://69b910dbe69653ffe6a66948.mockapi.io/users?email=${formData.email}&password=${formData.password}`);
            const users = await response.json();

            if (users.length > 0) {
                // User found, save to localStorage
                localStorage.setItem("user", JSON.stringify(users[0]));
                navigate("/profile");
            } else {
                setError("Invalid email or password.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Network error. Is JSON Server running?");
        }
    };

    return (
        <div className="login-container">

            <h2>Signin to your <br /> PopX account</h2>

            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleLogin}>
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />

                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />

                <button type="submit" className="primary-btn">
                    Login
                </button>
            </form>

            <p className="signup-text">
                Don't have an account?
                <Link to="/signup"> Create Account</Link>
            </p>

        </div>
    );
}

export default Login;