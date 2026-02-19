import request from 'supertest';
import app from '../app';
import { pool } from '../db';

afterAll(async () => {
  // Close the database pool after tests to prevent hanging processes
  await pool.end();
});

describe('GET /users', () => {
  it('should return a 200 status and an array', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});