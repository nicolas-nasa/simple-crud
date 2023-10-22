import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PersonEntity } from '../../entities';
import { buildResponse } from '../../helpers';
import { PersonRepository } from '../../repositories';
import { validateCNPJ, validateCPF, validateEmail } from '../../utils';

class PersonController {
    async createPerson(request: Request, response: Response): Promise<Object | void> {
        try {
            const removedFormatation = await validateCNPJ.removeFormation(
                request.body.document,
            );
            const isValidEmail = await validateEmail.isValidFormat(request.body.email);
            const isValidCnpj = await validateCNPJ.isValidCnpj(removedFormatation);
            const isValidCpf = await validateCPF.isValidCpf(removedFormatation);
            const isNewEmail = await PersonRepository.listPerson(request.body.email);

            if (!isValidEmail) {
                return buildResponse(response, {
                    body: { document: 'Check your email format' },
                    statusCode: StatusCodes.BAD_REQUEST,
                });
            }
            if (isNewEmail.length > 0) {
                return buildResponse(response, {
                    body: { document: 'This email is in use' },
                    statusCode: StatusCodes.BAD_REQUEST,
                });
            }
            if (isValidCnpj || isValidCpf) {
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
                return buildResponse(response, {
                    body: result,
                    statusCode: StatusCodes.OK,
                });
            }
            return buildResponse(response, {
                body: { document: 'Check your document number' },
                statusCode: StatusCodes.BAD_REQUEST,
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
                const getPerson = await PersonRepository.getPerson(request.params.id);
                if (!(getPerson.length > 0)) {
                    return buildResponse(response, {
                        body: { message: 'User not exist' },
                        statusCode: StatusCodes.BAD_REQUEST,
                    });
                }
                const isNewEmail = await PersonRepository.listPerson(request.body.email);
                if (
                    isNewEmail[0]?.id &&
                    isNewEmail[0]?.id !== parseFloat(request.params.id)
                ) {
                    return buildResponse(response, {
                        body: { document: 'This email is in use' },
                        statusCode: StatusCodes.BAD_REQUEST,
                    });
                }
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
                const getPerson = await PersonRepository.getPerson(request.params.id);
                if (!(getPerson.length > 0)) {
                    return buildResponse(response, {
                        body: { message: 'User not exist' },
                        statusCode: StatusCodes.BAD_REQUEST,
                    });
                }
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
