import React, { useState } from "react";
import './Feedback.css';

export const Feedback = (props) => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const maxCharacters = 120;

    const emailIsValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleFeedbackChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
            setFeedback(e.target.value);
        }
    }

    const characterCount = feedback.length;

    const [rating, setRating] = useState(0);

    const handleStarClick = (clickedRating) => {
        setRating(clickedRating);
    }

    const isFormValid = emailIsValid(email) && feedback.trim() !== '' && rating > 0;

    const handleSubmit = () => {
        if (isFormValid) {
            console.log("Form submitted successfully!");
            props.onFormSwitch('login');
        } else {
            alert("Please fill out all fields correctly.");
        }
    }

    return (
        <div className="feedback-container">
            <div className="feedback-auth-form-container">
                <div className="feedback-Title-label">Feedback Form</div>
                <form className="feedback-login-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        name="Email"
                        className="emailfield"
                    />
                    <label htmlFor="feedback">Tell us more:</label>
                    <div className="feedback-input-container">
                        <input
                            value={feedback}
                            onChange={handleFeedbackChange}
                            type="text"
                            placeholder="What's your feedback?"
                            id="feedback"
                            name="Feedback"
                            className="feedbackfield"
                        />
                        <div className="character-counter">
                            {characterCount}/{maxCharacters}
                        </div>
                    </div>
                    <div className="star-rating">
  <label>How would you rate us?</label>
  <div className="stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <img
        key={star}
        src={star <= rating ? require('./Images/star-filled.png') : require('./Images/star.png')}
        alt={`Star ${star}`}
        onClick={() => handleStarClick(star)}
        style={{
          width: '43px', // Set the desired width for both the star images
          height: '43px', // Set the desired height to maintain the same size
          cursor: 'pointer',
          marginLeft: '40px', // Add spacing between stars
          filter: star <= rating ? 'brightness(1.3)' : 'brightness(1)', // Adjust brightness
        }}
      />
    ))}
  </div>
</div>
                    <hr className="border-line" />
                    <button type="button" onClick={handleSubmit} disabled={!isFormValid} className="button-submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}
