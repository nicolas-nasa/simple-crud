import { PersonRepository } from '.';
import { PersonEntity } from '../../entities';
describe('Test Person Repository', () => {
    it('list Persons', async () => {
        const response = await PersonRepository.listPerson('');
        expect(response).toBeInstanceOf(Array<PersonEntity>);
    });
    it('create Persons', async () => {
        const response = await PersonRepository.createPerson({
            name: 'test',
            lastName: 'almeida',
            born: new Date(),
            email: 'test@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165825',
        });
        if (response?.id) await PersonRepository.deletePerson(response?.id);
        expect([response]).toBeInstanceOf(Array<PersonEntity>);
    });
    it('delete Persons', async () => {
        const create = await PersonRepository.createPerson({
            name: 'test',
            lastName: 'almeida',
            born: new Date(),
            email: 'test@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165825',
        });
        if (create?.id) {
            const response = await PersonRepository.deletePerson(create?.id);
            expect([response]).toBeInstanceOf(Array<number>);
        }
    });
    it('update Persons', async () => {
        const create = await PersonRepository.createPerson({
            name: 'test',
            lastName: 'almeida',
            born: new Date(),
            email: 'test@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165825',
        });
        if (create?.id) {
            const response = await PersonRepository.updatePerson({
                id: 2,
                name: 'nicolas',
                lastName: 'almeida',
                born: new Date(),
                email: 'nicolas@gmail.com',
                phoneNumber: '11964464518',
                end: '',
                city: 'sp',
                state: 'sp',
                cep: '02982021',
                document: '45677165824',
            });
            await PersonRepository.deletePerson(create?.id);
            expect([response]).toBeInstanceOf(Array<PersonEntity>);
        }
    });
});

