import request from 'supertest';
import { app } from '../../config';

describe('Test read code bar', () => {
    it('return', async () => {
        const res = await request(app).get('/api/person/list');
        console.log(res.body);
    });
    // it('return', async () => {
    //     const res = await request(app).post('/api/person/create');
    //     expect(res.body).toHaveProperty('amount', '20.00');
    // });
    // it('return', async () => {
    //     const res = await request(app).get('/api/person/update/:id');
    //     expect(res.body).toHaveProperty('amount', '20.00');
    // });
    // it('return', async () => {
    //     const res = await request(app).get('/api/person/delete/:id');
    //     expect(res.body).toHaveProperty('amount', '20.00');
    // });
});
