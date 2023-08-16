import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../Authentication/assets/profile.png'
import toast , {Toaster} from 'react-hot-toast';
import { useFormik } from 'formik';
import convertToBase64 from '../Authentication/helper/convert';
import styles from '../styles/Username.module.css';
import zxcvbn from 'zxcvbn';

// Register Component
const Register = ({handleRegister}) => {
  // State variables to manage user input values
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [email, setEmail] = useState("");
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input values
    if (!email || !username || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!email.match(/@gmail\.com$/)) {
      toast.error("Only Gmail addresses are allowed.");
      return;
    }  
    // Check password strength using zxcvbn
    const passwordStrength = zxcvbn(password);
    if (passwordStrength.score < 3) {
      toast.error('Password is too weak. Please use a stronger password.');
      return;
    }   

    try {
      // Call the 'handleRegister' function provided by the parent component
      await handleRegister(username, password, email, confirmPassword);
      setUsername("");
      setPassword("");
      setEmail("");
      setConfirmPassword(""); // Clear confirm password field after submission
      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Failed to register. Please try again.");
    }
  };
  
  // Formik form management
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      empID: '',
      role: '',
      password: ''
    },

    // Function to submit form values
    onSubmit: async values => {
      // Assign the profile image file (if any) to the form values
      values = await Object.assign(values, { profile: file || '' });
    }
  });

  /** Handle file upload and conversion to base64 */
  const onUpload = async e => {
    // Convert the selected file to base64 format
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      {/* Toast for displaying notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '45%', height:'100%' }}>
          <div className="title flex flex-col items-center">
            {/* Title and description */}
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>

          <form className="py-8" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-1">
              {/* Profile image */}
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={`${styles.profile_img}`}
                  alt="avatar"
                />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-2">
              {/* Form inputs */}
              <input
                className={styles.textbox}
                type="text"
                placeholder="Email*"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles.textbox}
                type="text"
                placeholder="Username*"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={styles.textbox}
                type="password"
                placeholder="Password*"
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <input
                className={styles.textbox}
                type="password"
                placeholder="Confirm Password*"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* Dropdown for selecting privileges */}
              <select
                className={styles.textbox}
                onChange={formik.handleChange}
                value={formik.values.position}
                name="position"
                required
              >
                <option value="">Select Privileges*</option>
                <option value="Read">Read</option>
                <option value="Read and Write">Read and Write</option>
                <option value="Full Control">Full Control</option>
              </select>
              <input
                className={styles.textbox}
                type="text"
                placeholder="Company*"
              />
              <input
                className={styles.textbox}
                type="text"
                placeholder="EMPID"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

// End of Register Component
/* This code defines a Register component that provides a registration
 form for users to create an account. It includes input fields 
 for email, username, password, confirm password, and additional 
 information. The component handles input validation, password 
 strength, and file upload. It also uses Formik for form management
  and provides a clear and concise user registration experience. */
