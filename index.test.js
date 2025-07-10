import request from 'supertest';
import express from 'express';

const app = express();
app.get('/test', (req, res) => {
  res.json({ message: 'Test OK' });
});

describe('GET /test', () => {
  it('should return JSON with message Test OK', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Test OK' });
  });
}); 