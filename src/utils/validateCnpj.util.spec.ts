import { validateCNPJ } from '../utils';
describe('Validate CNPJ Class', () => {
    it('Check is a valid CNPJ', async () => {
        const cnpj = '43.691.750/0001-60';
        const removeFormation = await validateCNPJ.removeFormation(cnpj);
        const validated = await validateCNPJ.isValidCnpj(removeFormation);
        expect(validated).toBe(true);
    });

    it('Check is a invalid CNPJ', async () => {
        const cnpj = '43.691.750/3001-60';
        const removeFormation = await validateCNPJ.removeFormation(cnpj);
        const validated = await validateCNPJ.isValidCnpj(removeFormation);
        expect(validated).toBe(false);
    });
});

