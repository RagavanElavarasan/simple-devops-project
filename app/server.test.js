const request = require('supertest');
const app = require('./server'); // Adjust the path if needed.

describe('GET /', () => {
    it('should return the welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, this is the Simple DevOps Project!');
    });
});
