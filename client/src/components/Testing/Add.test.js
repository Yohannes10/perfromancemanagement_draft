import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Add from "../CRUD/Add";

// Test for the Add component's input change and rendering behavior
test('handles input change and matches snapshot', () => {
  // Mock function to simulate the addTask callback
  const mockAddTask = jest.fn();
  
  // Render the Add component with the mock addTask function
  const { getByPlaceholderText, asFragment } = render(<Add addTask={mockAddTask} />);
  
  // Find the input element by its placeholder text ("Goal title")
  const titleInput = getByPlaceholderText('Goal title');
  
  // Simulate input change event with a new value ("New Task Title")
  fireEvent.change(titleInput, { target: { value: 'New Task Title' } });

  // Check if the input value matches the expected value
  expect(titleInput.value).toBe('New Task Title');

  // Compare the rendered component snapshot with the stored snapshot
  expect(asFragment()).toMatchSnapshot();
});


/* This test suite checks the
behavior and rendering of the Add component. 
It uses a mock function to simulate the addTask
callback and renders the component. The test 
first simulates an input change event by changing
the input field's value. It then compares the changed input
value and captures a snapshot of the rendered component's UI. 
handled and that the UI rendering remains consistent over time. */