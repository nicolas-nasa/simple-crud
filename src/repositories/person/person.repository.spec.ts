import { PersonRepository } from '.';
import { PersonEntity } from '../../entities';
describe('Test Person Repository', () => {
    it('list Persons', async () => {
        const response = await PersonRepository.listPerson('sana@gmail.com');
        console.log(response);
        expect(response).toBeInstanceOf(Array<PersonEntity>);
    });
    it('create Persons', async () => {
        const response = await PersonRepository.createPerson({
            name: 'sana',
            lastName: 'almeida',
            born: new Date(),
            email: 'sana@gmail.com',
            phoneNumber: '11964164518',
            city: '',
            state: '',
            cep: '02982221',
            document: '45677165825',
        });
        expect([response]).toBeInstanceOf(Array<PersonEntity>);
    });
    it('delete Persons', async () => {
        const response = await PersonRepository.deletePerson(5);
        expect([response]).toBeInstanceOf(Array<number>);
    });
    it('update Persons', async () => {
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
        expect([response]).toBeInstanceOf(Array<PersonEntity>);
    });
});

