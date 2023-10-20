import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PersonEntity } from '../../entities';
import { buildResponse } from '../../helpers';
import { PersonRepository } from '../../repositories';

class PersonController {
    async createPerson(request: Request, response: Response): Promise<Object | void> {
        try {
            console.log('chegou');
            const person: PersonEntity = {
                name: request.body?.name,
                lastName: request.body?.lastName,
                born: new Date(),
                email: request.body?.email,
                phoneNumber: request.body?.phoneNumber,
                end: request.body?.end,
                city: request.body?.city,
                state: request.body?.state,
                cep: '0',
                document: '0',
            };
            const result = await PersonRepository.createPerson(person);
            console.log(result);
            return buildResponse(response, {
                body: result,
                statusCode: StatusCodes.OK,
            });
        } catch (err) {
            return buildResponse(response, {
                body: err.message,
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            });
        }
    }
    async updatePerson(request: Request, response: Response): Promise<Object | void> {
        try {
            if (request.params?.id) {
                const person: PersonEntity = {
                    id: parseFloat(request.params.id),
                    name: request.body?.name,
                    lastName: request.body?.lastName,
                    born: new Date(),
                    email: request.body?.email,
                    phoneNumber: request.body?.phoneNumber,
                    end: request.body?.end,
                    city: request.body?.city,
                    state: request.body?.state,
                    cep: '0',
                    document: ' 0',
                };
                const result = await PersonRepository.updatePerson(person);
                return buildResponse(response, {
                    body: result,
                    statusCode: StatusCodes.OK,
                });
            }
        } catch (err) {
            return buildResponse(response, {
                body: err.message,
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            });
        }
    }
    async deletePerson(request: Request, response: Response): Promise<Object | void> {
        try {
            if (request.params?.id) {
                const result = await PersonRepository.deletePerson(
                    parseFloat(request.params?.id),
                );
                return buildResponse(response, {
                    body: result,
                    statusCode: StatusCodes.OK,
                });
            }
        } catch (err) {
            return buildResponse(response, {
                body: err.message,
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            });
        }
    }
    async listPerson(request: Request, response: Response): Promise<Object | void> {
        try {
            console.log('chegou');
            const result = await PersonRepository.listPerson();
            console.log(result);
            return buildResponse(response, {
                body: result,
                statusCode: StatusCodes.OK,
            });
        } catch (err) {
            return buildResponse(response, {
                body: err.message,
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            });
        }
    }
}

export { PersonController };
