import React from "react";
import toast from "react-hot-toast"; // Import react-hot-toast


const Delete = ({ handleDeleteTask, taskId }) => {
  const handleDelete = () => {
    // Show a toast for confirmation
    const toastId = toast.success("Are you sure you want to delete this task?", {
      icon: "🗑️", // You can use any icon you like
      style: {
        border: "1px solid #ccc",
        padding: "10px",
        color: "#333",
      },
      duration: 8000, // Customize the duration (milliseconds)
      position: "top-right", // Customize the position
      onClick: () => {
        // If the user clicks the toast, call the provided handleDeleteTask function with the taskId parameter
        handleDeleteTask(taskId);
        toast.dismiss(toastId); // Dismiss the toast after the action
      },
    });
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default Delete;