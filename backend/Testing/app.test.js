// Testing/app.test.js

const express = require('express');
const request = require('supertest');
const app = require('./app'); // Make sure the path to your app.js is correct

describe('Express Server Setup', () => {
  it('should define routes and middleware correctly', async () => {
    const response = await request(app).get('/'); // Assuming the route is '/'
    expect(response.status).toBe(404);
  });

  // Other test cases
});
