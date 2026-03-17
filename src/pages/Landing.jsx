import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing-container">

            <div className="landing-bottom">

                <h2>Welcome to PopX</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                <Link to="/signup">
                    <button className="primary-btn">
                        Create Account
                    </button>
                </Link>

                <Link to="/login">
                    <button className="secondary-btn">
                        Already Registered? Login
                    </button>
                </Link>

            </div>

        </div>
    );
}

export default Landing;