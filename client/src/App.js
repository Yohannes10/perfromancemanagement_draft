import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ParentComponent from "./components/CRUD/ParentComponent"
import Sidebar from "./components/Extra/Sidebar";
import { Button } from "react-bootstrap";
import Add from "./components/CRUD/Add";
import TaskList from "./components/CRUD/TaskList";
import Home from "./components/CRUD/Home";
import { createPopper, popperGenerator } from '@popperjs/core/dist/esm/createPopper';
import { detectOverflow as detectOverflowPopper } from '@popperjs/core/dist/esm/utils/detectOverflow.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  // asynchronous function that handles the registration submission - has two parameters
  const handleRegister = async (username, password) => {
    try {
      // sends a POST request to the API with the username and password in the body request
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // if the response was OK
      if (response.status === 200) {
        // alert the user
        alert("User registered successfully.");
        // Update the state to indicate successful registration
        setIsRegistered(true);
        // if the response was a Bad Request
      } else if (response.status === 400) {
        const data = await response.json();
        // log  the error
        console.log("Registration failed:", data.error);
        // alert the user
        alert("Registration failed!");
        // if the response code was Forbidden
      } else if (response.status === 403) {
        // log  the error
        console.log("Registration forbidden: User not allowed.");
        // alert the user
        alert("Registration forbidden: Username has to end with '@gmail.com'.");
      } else {
        // log the error
        console.log("Registration failed with status:", response.status);
        // alert the user
        alert("Username already exists!");
      }
    } catch (error) {
      // log the error
      console.error("Error during registration:", error.message);
    }
  };

  // asynchronous function that handles the login submission - has two parameters
  const handleLogin = async (username, password) => {
    try {
      // sends a POST request to the API with the username and password in the body request
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // if the response was OK
      if (response.ok) {
        const data = await response.json();
        // saves the authentication token in local storage
        localStorage.setItem("token", data.token);
        // sets the logged in state to true -> displays the logged in view
        setIsLoggedIn(true);
        console.log(isLoggedIn)
      } else {
        // if there was an error
        const errorData = await response.json();
        // log the error
        console.error("Login failed:", errorData.message);
        // alert the user
        alert("Login failed: Invalid username or password");
      }
      // if there was an error
    } catch (error) {
      // log the error
      console.error("Error logging in:", error);
      // alert the user
      alert("Login forbidden: Username has to end with '@gmail.com'.");
    }
   
  };
 
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
        <Router>
        {isLoggedIn && (
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <div>
          {isLoggedIn && (
            <>
              <h1>To-Do List App</h1>
              <Button
                style={{ position: "absolute", top: "15px", right: "20px" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AddTask" element={<Add />} />
              <Route path="/ShowTask" element={<TaskList />} />
            </Routes>
          ) : (
            <ParentComponent
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              isLoggedIn={isLoggedIn}
              isRegistered={isRegistered}
              handleLogout={handleLogout}
            />
          )}
        </div>
        </Router>
    </div>
  );
};

export default App;