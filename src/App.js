import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Feedback } from "./Feedback";
import { OtpVerification } from "./Otp-Verification";
import ForgotPassword from "./Forgot-Password";
import ResetPassword from "./Reset-Password";
import {Guest} from "./Guest.jsx";
import Dashboard from "./Dashboard.jsx";
import Report from "./report.jsx";
function App() {
  const [currentForm, setCurrentForm] = useState('Feedback');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  

  let formToDisplay;

  if (currentForm === "login") {
    formToDisplay = <Login onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "register") {
    formToDisplay = <Register onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "feedback") {
    formToDisplay = <Feedback onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "Otp-Verification") {
    formToDisplay = <OtpVerification onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "Forgot-Password") {
    formToDisplay = <ForgotPassword onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "Reset-Password") {
    formToDisplay = <ResetPassword onFormSwitch={toggleForm} />;
  }
  else if(currentForm === "Guest"){
    formToDisplay =<Guest onFormSwitch={toggleForm}/>;
  }
  else if(currentForm === "Dashboard"){
    formToDisplay =<Dashboard onFormSwitch={toggleForm}/>;
  }
  else if (currentForm === "report") {
    formToDisplay = <Report onFormSwitch={toggleForm} />;
  }
  return (
    <div className="App">
      {formToDisplay}
    </div>
  );
}

export default App;
