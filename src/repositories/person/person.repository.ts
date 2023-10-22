import { prisma } from '../../config';
import { PersonEntity } from '../../entities';

const createPerson = async (person: PersonEntity): Promise<PersonEntity> => {
    const response = await prisma.person.create({
        data: {
            name: person.name,
            lastName: person?.lastName,
            born: person?.born,
            email: person?.email,
            phoneNumber: person?.phoneNumber,
            end: person?.end,
            city: person?.city,
            state: person?.state,
            cep: person?.cep,
            document: person?.document,
        },
    });

    return response;
};
const updatePerson = async (person: PersonEntity): Promise<PersonEntity> => {
    const response = await prisma.person.update({
        data: {
            name: person?.name,
            lastName: person?.lastName,
            born: person?.born,
            email: person?.email,
            phoneNumber: person?.phoneNumber,
            end: person?.end,
            city: person?.city,
            state: person?.state,
            cep: person?.cep,
            document: person?.document,
        },
        where: {
            id: person.id,
        },
    });

    return response;
};
const deletePerson = async (id: number): Promise<PersonEntity> => {
    const response = await prisma.person.delete({ where: { id } });
    return response;
};
const listPerson = async (email?: string): Promise<PersonEntity[]> => {
    if (email) {
        return [
            await prisma.person.findFirstOrThrow({
                where: {
                    email,
                },
            }),
        ];
    }
    const response = await prisma.person.findMany();
    return response;
};

const getPerson = async (id: string): Promise<PersonEntity[]> => {
    const response = await prisma.person.findFirstOrThrow({
        where: { id: parseFloat(id) },
    });
    return [response];
};

export { createPerson, deletePerson, getPerson, listPerson, updatePerson };

