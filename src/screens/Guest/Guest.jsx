import React from "react";
import "./style.css";
import TaskList  from "./TaskList";


export const Guest = () => {
  return (
   <div className="guest">
   {/*Header*/}
     <header>
      {/*Sign In btn*/}
          <div className="sign-in">
            <button className="btn">
              <div className="InSign">Sign In</div>
              <img className="Userimg" alt="Male user" src="/img/male-user-1.png" />
            </button>
          </div>

        {/*Logo*/}
          <img className="logo" alt="Logo" src="/img/logo.png" />
      </header> 



{/*Task Part */}

<div className="TASKS"> 
    
    <TaskList/>
           

  </div>


    {/*AboutFunTaskIt*/}
        <div className="aboutContainer">
         
               <div className="AboutTopContainer">
                  <div className="Intro">What is FunTaskIt? </div>
                 
                     <p className="info">
                       FunTaskIt is your go-to companion for turning mundane to-dos into delightful accomplishments. With a playful
                       interface and intuitive design, FunTaskIt transforms the way you manage tasks, infusing joy into your daily
                       routine. Organize, prioritize, and conquer your goals effortlessly, all while enjoying the journey. Elevate
                       your productivity with a touch of fun—because getting things done should be as enjoyable as the tasks
                       themselves. Welcome to a world where ticking off your to-dos is a rewarding adventure, courtesy of FunTaskIt
                     </p>
       
                </div>
                 
                  
                    <div className="AboutBotContainer">
                           <div className="UpgradePremium">
                                <h2 className="titlePremium">Upgrade to Premium</h2>
                                <ul>
                                    <li>&#8226;Priority access to new features</li>
                                    <li>&#8226;Customizable themes for a personalized touch</li>
                                    <li>&#8226;Advanced task scheduling and reminders</li>
                                    <li>&#8226;Sync tasks across devices seamlessly</li>
                                 </ul>
                            </div>
       
                                   {/*Create Account*/}
                                <button onClick="" className="Createbtn">
                                      <div className = "userImg"> 
                                       <img className="male-user" alt="Male user" src="/img/male-user.png" />
                                      </div>
                                      <div className="btnTxtPink">
                                       <p>Create An Account</p>
                                       </div> 
                                </button>
               
                    </div>
                   
               </div>

           

      

      
      
       
            
       
           
        

        
        </div>


     
    
     );      
};



      