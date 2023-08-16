import React, { useState } from "react";
import DatePicker from "react-datepicker";

// Edit Component: Allows users to edit an existing goal
const Edit = ({ task, handleUpdateTask, handleCancelEdit }) => {
  // State variables to manage input values
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);

  // Function to handle form submission when updating a goal
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the title is not empty before updating
    if (title.trim() === "") return;
    // Call the handleUpdateTask function with the updated details
    handleUpdateTask({ title, description, date, completed: task.completed });
  };

  return (
    <div className="card card-body">
      <h4>Edit a Goal</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* Input field for updating the goal title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter updated Goal title"
            className="form-control"
          />
          {/* Textarea for updating the goal description */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter updated Goal description"
            className="form-control"
          ></textarea>
          <div className="form-group">
            {/* DatePicker for updating the goal date */}
            <DatePicker
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          {/* Button to update the goal */}
          <button type="submit" className="btn btn-primary">
            Update Goal
          </button>
          {/* Button to cancel the editing process */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;



/* The Edit component allows users to modify the details of an existing goal.
It provides input fields for updating the goal's title and description,
as well as a DatePicker for changing the goal's date. Users can submit
the form to update the goal's details. Additionally, a "Cancel" button
is available to discard the editing process. */
