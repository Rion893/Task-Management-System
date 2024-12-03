import React, { useState } from "react";
import './Otp-Verification.css';

export const OtpVerification = (props) => {
    const [Verification_Code, setVerification_Code] = useState('');
    const [isOtpCorrect, setIsOtpCorrect] = useState(false); 

    const handleSubmit = () => {
        if (Verification_Code === '1234') { 
            setIsOtpCorrect(true);
            props.onFormSwitch('/* pupunta to sa mismong dashboard or homepage naten */');
        } else {
            setIsOtpCorrect(false);
        }
    }

    const isFormValid = Verification_Code.trim() !== '';

    return (
        <div className="Otp-container">
            <div className="Otp-auth-form-container">
                <div className="Otp-Title-label">OTP Verification</div>
                <div className="Otp-message-container">
                    {isOtpCorrect ? ( // Show a success message if OTP is correct
                        <label className="message-label">Account Created Successfully</label>
                    ) : (
                        <label className="message-label">We've sent a verification code to your email</label>
                    )}
                </div>
                <input
                    value={Verification_Code}
                    onChange={(e) => setVerification_Code(e.target.value)}
                    type="text" 
                    placeholder="Enter Verification Code"
                    id="verification_Code"
                    name="Verification_Code"
                    className="Verification_CodeField"
                />
                <button type="button" onClick={handleSubmit} disabled={!isFormValid} className="Otp-button-Login">
                    LOGIN
                </button>
            </div>
        </div>
    );
}
