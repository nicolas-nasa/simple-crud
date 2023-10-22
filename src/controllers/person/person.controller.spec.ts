import request from 'supertest';
import { app } from '../../config';
// need create a database in CI to test or mock ORM operations
// need create more test tratamets
describe.skip('Test read code bar', () => {
    it('list', async () => {
        const res = await request(app).get('/api/person/list');
        console.log(res.body);
    });
    it('create', async () => {
        const res = await request(app).post('/api/person/create').send({
            name: 'eric',
            lastName: 'almeida',
            born: new Date(),
            email: 'eric@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165824',
        });
        console.log(res);
    });
    it('update', async () => {
        const res = await request(app).put('/api/person/update/8').send({
            name: 'eric',
            lastName: 'almeida',
            born: new Date(),
            email: 'erica@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165824',
        });
        console.log(res.body);
    });
    it('delete', async () => {
        const res = await request(app).delete('/api/person/delete/8');
        console.log(res.body);
    });
});
