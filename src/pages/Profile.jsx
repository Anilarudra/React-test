import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Redirect to login if not authenticated
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) {
        return <div>Loading...</div>; // Or return null while redirecting
    }

    return (
        <div className="profile-page">

            <h3 className="profile-title">Account Settings</h3>

            <div className="profile-header">

                <img
                    className="profile-img"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="profile"
                />

                <div>
                    <h4>{user.fullName || "User"}</h4>
                    <p>{user.email}</p>
                </div>

            </div>

            <p className="profile-text">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
                Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>

            <button
                className="primary-btn"
                onClick={handleLogout}
                style={{ marginTop: '20px', backgroundColor: '#dc3545', color: 'white' }}
            >
                Logout
            </button>

        </div>
    );
}

export default Profile;