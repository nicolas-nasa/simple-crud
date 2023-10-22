import { validateEmail } from '../utils';
describe('Validate Email Class', () => {
    it('Check is a valid Email format', async () => {
        const email = 'nicolas.almeida@email.com';
        const validated = await validateEmail.isValidFormat(email);
        expect(validated).toBe(true);
    });

    it('Check is a invalid Email format', async () => {
        const email = '456.771.658.44';
        const validated = await validateEmail.isValidFormat(email);
        expect(validated).toBe(false);
    });
});

