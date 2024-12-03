import React, { useState } from "react";
import './Reset-Password.css';
import { useHistory } from "react-router-dom";

function ResetPassword(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div className="Reset-Passwordcontainer">
            <div className="Reset-Password-auth-form-container">
                <div className="Reset-Password-Title-label">Reset Password</div>
                <form className="Reset-Password-form" onSubmit={handleSubmit}>
                    <label htmlFor="password" className="Reset-Password-label">Password:</label>
                    <div className="password-input">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter 6 Characters or more"
                            id="password"
                            name="Password"
                            className="Reset-Password-form-input"
                        />
                
                    </div>
                    <label htmlFor="confirmPassword" className="Reset-Password-label">Confirm Password:</label>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Enter 6 Characters or more"
                        id="confirmPassword"
                        name="ConfirmPassword"
                        className="Reset-Password-form-input"
                    />
                    
                    <div className="Reset-Password-form-actions">
                        <button className="Reset-Password-link-btn" onClick={() => props.onFormSwitch('login')}>
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
