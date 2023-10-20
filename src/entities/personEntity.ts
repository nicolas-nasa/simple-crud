export type PersonEntity = {
    id?: number;
    name: string;
    lastName?: string | null;
    born?: Date | null;
    email: string;
    phoneNumber?: string | null;
    end?: string | null;
    city?: string | null;
    state?: string | null;
    cep?: string | null;
    document: string;
    createdAt?: Date;
    updatedAt?: Date | null;
};

