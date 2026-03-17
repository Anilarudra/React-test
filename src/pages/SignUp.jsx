import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        companyName: "",
        agency: "No"
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.password) {
            setError("Please fill in required fields.");
            return;
        }

        navigate("/profile");
    };

    return (
        <div className="signup-container">

            <h2>Create your <br /> PopX account</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSignup}>
                <label>Full Name *</label>
                <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} />

                <label>Phone number *</label>
                <input type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />

                <label>Email address *</label>
                <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />

                <label>Password *</label>
                <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />

                <label>Company name *</label>
                <input type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} />

                <p className="agency-text">Are you an Agency? *</p>

                <div className="radio-group">
                    <label>
                        <input type="radio" name="agency" value="Yes" checked={formData.agency === "Yes"} onChange={handleChange} /> Yes
                    </label>

                    <label>
                        <input type="radio" name="agency" value="No" checked={formData.agency === "No"} onChange={handleChange} /> No
                    </label>
                </div>

                <button
                    type="submit"
                    className="primary-btn"
                >
                    Create Account
                </button>
            </form>

        </div>
    );
}

export default SignUp;