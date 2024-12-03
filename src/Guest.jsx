  // Guest.js
  import React from "react";
  import "./style.css";
  import TaskList from "./TaskList";
  import maleUserImage1 from "./dist/img/male-user-1.png";
  import maleUserImage from "./dist/img/male-user.png";
  import logoImage from "./dist/img/logo.png";

  export const Guest = ({ onFormSwitch }) => {
    const handleCreateAccountClick = () => {
      onFormSwitch("register");
    };

    const handleSignInClick = () => {
      onFormSwitch("login");
    };

    return (
      <div className="guest">
        {/* Header */}
        <header className="guest-header">
          {/* Sign In btn */}
          <div className="guest-sign-in">
            <button className="guest-btn" onClick={handleSignInClick}>
              <div className="guest-InSign">Sign In</div>
              <img
                className="guest-Userimg"
                alt="Male user"
                src={maleUserImage1}
              />
            </button>
          </div>

          {/* Logo */}
          <img
            className="guest-logo"
            alt="Logo"
            src={logoImage}
          />
        </header>

        {/* Task Part */}
        <div className="guest-TASKS">
          <TaskList />
        </div>

        {/* AboutFunTaskIt */}
        <div className="guest-aboutContainer">
          <div className="guest-AboutTopContainer">
            <div className="guest-Intro">What is FunTaskIt? </div>

            <p className="guest-info">
              FunTaskIt is your go-to companion for turning mundane to-dos into
              delightful accomplishments. With a playful interface and intuitive
              design, FunTaskIt transforms the way you manage tasks, infusing joy
              into your daily routine. Organize, prioritize, and conquer your
              goals effortlessly, all while enjoying the journey. Elevate your
              productivity with a touch of fun—because getting things done should
              be as enjoyable as the tasks themselves. Welcome to a world where
              ticking off your to-dos is a rewarding adventure, courtesy of
              FunTaskIt
            </p>
          </div>

          <div className="guest-AboutBotContainer">
            <div className="guest-UpgradePremium">
              <h2 className="guest-titlePremium">Upgrade to Premium</h2>
              <ul>
                <li>&#8226; Priority access to new features</li>
                <li>&#8226; Customizable themes for a personalized touch</li>
                <li>&#8226; Advanced task scheduling and reminders</li>
                <li>&#8226; Sync tasks across devices seamlessly</li>
              </ul>
            </div>

            {/* Create Account */}
            <button onClick={handleCreateAccountClick} className="guest-Createbtn">
              <div className="guest-userImg">
                <img
                  className="guest-male-user"
                  alt="Male user"
                  src={maleUserImage}
                />
              </div>
              <div className="guest-btnTxtPink">
                <p>Create An Account</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };
