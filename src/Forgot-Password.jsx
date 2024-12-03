// Forgot-Password.jsx
import React, { useState } from "react";
import './Forgot-Password.css';

function ForgotPassword(props) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div className="Forgot-Password-container">
            <div className="Forgot-Password-auth-form-container">
                <div className="Forgot-Password-Title-label">Forgot Password</div> 
                <form className="Forgot-Password-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="loginlabel">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        name="Email"
                        className="Forgot-Password-form-input"
                    />
                    <div className="form-actions">
                        <button className="Forgot-Password-link-btn" onClick={() => props.onFormSwitch('Reset-Password')}>
                            Forgot Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
