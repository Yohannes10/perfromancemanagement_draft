import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import "./Dashboard.css";
function Dashboard() {
  return (
    <main className="main-container">
      <div className="main-title"></div>
      <div className="welcome">
        <h3>Welcome!</h3>
        <p>
          Welcome to GoldOurs! A simple and flexible solution for organizing
          360-degree feedback surveys and employee performance management
        </p>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner1">
            <h3>Skills to Improve</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h6>Focus on Impact</h6>
          <h6>Adopt a Growth Mindset</h6>
        </div>
        <div className="card">
          <div className="card-inner2">
            <h3>Pending Tasks</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>My Team</h3>
            <BsPeopleFill className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Upcoming Review</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h4>september 5</h4>
        </div>
      </div>

      <div className="home-container container">
        <div className="values-mission container-md">
          <div className="values">
            <h3>Our values</h3>
            <p>
            Unleash Potential, Drive Success. At GoldOurs,
             we believe in the power of unlocking hidden
             talents and abilities. Through client-centered 
            coaching and transparent practices, we foster growth,
             alignment, and excellence. Together, we achieve greatness 
             and forge a brighter future
            </p>
          </div>
          <div className="mission">
            <h3>Our mission</h3>
            <p>
            At GoldOurs, we are committed to unlocking the 
            untapped potential in individuals and organizations.
             Our mission is to provide tailored coaching and guidance,
           enabling our clients to reach their full potential and achieve 
           their long-term goals. We strive to create positive and impactful results,
            empowering our clients to excel in their personal and professional lives.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
