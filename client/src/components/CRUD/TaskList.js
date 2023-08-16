import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Rating from "react-rating-stars-component";
import Delete from "./Delete";
import "./TaskList.css"

// TaskList Component: Displays a list of tasks with options to edit, toggle completion, and delete
const TaskList = ({
  tasks,
  handleDeleteTask,
  handleEditTask,
  handleToggleTask,
}) => {
  // State variables to manage task ratings and departmental goals
  const [ratings, setRatings] = useState({});
  const [departmentalGoals, setDepartmentalGoals] = useState({});

  // Function to handle rating change for a specific task
  const handleRatingChange = (taskId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [taskId]: rating,
    }));
  };

  // Effect to log updated tasks prop
  useEffect(() => {
    console.log("Tasks Prop Updated in TaskList:", tasks);
  }, [tasks]);

  // Effect to fetch and update departmental goals from the server
  useEffect(() => {
    const fetchDepartmentalGoals = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/departmental-goals"
        );
        if (response.ok) {
          const data = await response.json();
          // Convert array of departmental goals into an object with goal ID as keys
          const goalsObject = data.reduce((acc, goal) => {
            acc[goal._id] = goal;
            return acc;
          }, {});
          setDepartmentalGoals(goalsObject);
        }
      } catch (error) {
        console.error("Error fetching departmental goals:", error);
      }
    };
    fetchDepartmentalGoals();
  }, []);

  // If tasks array is empty, show a message
  if (!tasks || tasks.length === 0) {
    return <h2>Goal List is empty</h2>;
  }

  return (
    <div data-testid="task-list-container">
      <div className="row">
        <div className="row justify-content-center align-items-center">
          {tasks.map((task) => (
            <div className="col-md-4 p-2 my-2" key={task._id}>
              <div className="card rounded-0">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5>{task.title}</h5>
                  <Button
                    onClick={() => handleEditTask(task._id)}
                    className="btn btn-sm"
                  >
                    Edit
                  </Button>
                </div>
                <div className="card-body">
                  <Form.Check
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      handleToggleTask(task._id, { completed: !task.completed })
                    }
                    // Styling for checkbox
                    style={{
                      border: "2px solid #007bff",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                      borderRadius: "px",
                      padding: "4px",
                      width: "25px",
                    }}
                  />
                  <p>Description: {task.description}</p>
                  <p>Date: {new Date(task.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <div>
                    <label>Please Rate Your Performance</label>
                    <Rating
                      count={5}
                      size={24}
                      value={ratings[task._id] || 0}
                      onChange={(newRating) =>
                        handleRatingChange(task._id, newRating)
                      }
                      half={false}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    onClick={() => handleDeleteTask(task._id)}
                    className="btn btn-sm delete-button"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

/* The TaskList component displays a list of tasks with options to edit,
 toggle completion, and delete. It also allows users to rate their 
 performance for each task. If there are no tasks, a message is 
 displayed. The component fetches and displays departmental goals 
 and logs updates. */