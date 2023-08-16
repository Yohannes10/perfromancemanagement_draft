import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./Add.css";

// Add Component: Allows users to create goals with specified details
const Add = ({ addTask }) => {
  // State to manage input values and selected date
  const [content, setContent] = useState({
    title: "",
    description: "",
    date: new Date(),
    userSelected: "",
    users: [],
    _id: "",
  });

  // Function to update date when the user selects a new one
  const onChangeDate = (date) => setContent({ ...content, date });

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    if (!content.title || content.title.trim() === "") {
      alert("Please enter a title for the task.");
      return;
    }
    // Call the addTask function passed as a prop to add the goal
    addTask(content);
    // Clear input fields after submission
    setContent({
      title: "",
      description: "",
      date: new Date(),
    });
  };

  // Function to handle input changes
  const onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  // State to store departmental goals fetched from the server
  const [departmentalGoals, setDepartmentalGoals] = useState([]);

  // Fetch departmental goals from the server on component mount
  useEffect(() => {
    const fetchDepartmentalGoals = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/departmental-goals"
        );
        if (response.ok) {
          const data = await response.json();
          setDepartmentalGoals(data);
        }
      } catch (error) {
        console.error("Error fetching departmental goals:", error);
      }
    };
    fetchDepartmentalGoals();
  }, []);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h2>Create a Goal</h2>
        <div>
          <h4>
            Goals describe specific objectives you want to achieve in your job,
            for a specific period of time. Goals change on every period. Make
            sure you define goals in SMART terms —
            <span className="bold-first-letter">S</span>pecific,
            <span className="bold-first-letter">M</span>easurable,
            <span className="bold-first-letter">A</span>ttainable,
            <span className="bold-first-letter">R</span>ealistic, and
            <span className="bold-first-letter">T</span>ime-bound.
          </h4>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <div className="form-group">
              {/* Dropdown for selecting a departmental goal */}
              <select
                className="form-control"
                placeholder="Select a Departmental Goal"
                name="departmentalGoal"
                value={content.departmentalGoal}
                onChange={onChange}
                required
              >
                <option value="">Select a goal...</option>
                {departmentalGoals.map((goal) => (
                  <option key={goal._id} value={goal._id}>
                    {goal.title}
                  </option>
                ))}
              </select>
            </div>
            {/* Input field for the task title */}
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Goal title"
                name="title"
                value={content.title}
                onChange={onChange}
                required
                autoFocus
              />
            </div>
            {/* Input field for the task description */}
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Goal description"
                name="description"
                value={content.description}
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            {/* DatePicker for selecting a date */}
            <DatePicker
              className="form-control"
              selected={content.date}
              onChange={onChangeDate}
            />
          </div>
          {/* Button to submit the form */}
          <Button type="submit" className="btn btn-primary">
            Add Goal
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add;

// End of Add Component
/* The Add component enables users to create goals with specific 
details. It provides input fields for a task's title, description,
 date, and a dropdown for selecting a departmental goal. Users can
  submit the form to add a new goal. The component also fetches
   departmental goals from the server and displays them in a 
   dropdown.  */

