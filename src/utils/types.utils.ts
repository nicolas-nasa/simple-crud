import { PersonEntity } from '../entities';

export interface personRepositoryInterface {
    create(person: PersonEntity): Promise<PersonEntity>;
    update(person: PersonEntity): Promise<PersonEntity>;
    delete(id: number): Promise<PersonEntity>;
    list(): Promise<PersonEntity[]>;
}

