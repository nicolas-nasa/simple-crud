import { validateCPF } from '@/utils';
describe('Validate CPF Class', () => {
    it('Check is a valid cpf', async () => {
        const cpf = '456.771.658.24';
        const removeFormation = await validateCPF.removeFormation(cpf);
        const validated = await validateCPF.isValidCpf(removeFormation);
        expect(validated).toBe(true);
    });

    it('Check is a invalid cpf', async () => {
        const cpf = '456.771.658.44';
        const removeFormation = await validateCPF.removeFormation(cpf);
        const validated = await validateCPF.isValidCpf(removeFormation);
        expect(validated).toBe(false);
    });
});

