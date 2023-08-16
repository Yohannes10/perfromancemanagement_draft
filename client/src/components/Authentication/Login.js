import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "./assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import styles from "../styles/Username.module.css";

// Login Component
const Login = ({ handleLogin }) => {
  // State variables to manage the username and password input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formik = useFormik({}); // Formik for form management (not fully implemented here)

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Call the 'handleLogin' function provided by the parent component, passing the username and password as arguments
    handleLogin(username, password);
  };

  return (
    <div className="container mx-auto">
      {/* Toast for displaying notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '45%', height: '90%' }}>
          {/* Title and description */}
          <div className="title flex flex-col items-center" >
            <h4 className="text-5xl font-bold">
              Hello
            </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          {/* Login Form */}
          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              {/* Username input */}
              <input
                className={styles.textbox}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Password input */}
              <input
                className={styles.textbox}
                type="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Sign In Button */}
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/">
                  Recover Now
                </Link>
              </span>
            </div>

            {/* Register Link */}
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

/* This code defines a Login component that presents 
a login form with input fields for a username and 
password. It allows users to sign in, recover their password,
 and navigate to the registration page.  */