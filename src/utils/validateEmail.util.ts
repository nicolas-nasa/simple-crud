export class ValidateEmail {
    async isValidFormat(email: string): Promise<boolean> {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }
}

