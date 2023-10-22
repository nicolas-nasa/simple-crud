import { indexs, sum, turnStringTypeInNumber } from './consts.utils';

export class ValidateCNPJ {
    async removeFormation(cpf: string): Promise<string> {
        const onlyNumbers = cpf.replace(/[^\d]/g, '');
        return onlyNumbers;
    }

    async checkIsRepeated(cnpj: string): Promise<boolean> {
        const firstNumber = cnpj[0];
        const isRepeatedNumber = RegExp(`^${firstNumber}+$`);

        return isRepeatedNumber.test(cnpj);
    }

    async checkSize(cnpj: string): Promise<boolean> {
        const isCNPJSize = RegExp(/^(\d{14})$/);

        return isCNPJSize.test(cnpj);
    }

    async calculateVerifyingDigit(
        numbersWithOutDv: string,
        digit: number,
    ): Promise<number> {
        const turnInArray = Array.from(numbersWithOutDv);
        return turnInArray
            .map((num, i) => {
                if (i < 12) return turnStringTypeInNumber(num) * (indexs[i + digit] || 0);
                return 0;
            })
            .reduce(sum);
    }

    async validateVerifyingDigits(cnpj: string): Promise<boolean> {
        let calculateFirstVerifyingDigit = await this.calculateVerifyingDigit(cnpj, 1);
        const verifyFirstDigit =
            turnStringTypeInNumber(cnpj[12] || '') ===
            ((calculateFirstVerifyingDigit %= 11) < 2
                ? 0
                : 11 - calculateFirstVerifyingDigit);

        let calculateSecondVerifyingDigit = await this.calculateVerifyingDigit(cnpj, 0);
        const verifySecondDigit =
            turnStringTypeInNumber(cnpj[13] || '') ===
            ((calculateSecondVerifyingDigit %= 11) < 2
                ? 0
                : 11 - calculateSecondVerifyingDigit);

        const checkIsValid = verifyFirstDigit && verifySecondDigit;
        return checkIsValid;
    }

    async isValidCnpj(cnpj: string): Promise<boolean> {
        const isRepeated = await this.checkIsRepeated(cnpj);
        const isCNPJSize = await this.checkSize(cnpj);
        if (isRepeated || !isCNPJSize) return false;
        const validateCnpj = this.validateVerifyingDigits(cnpj);

        return validateCnpj;
    }
}

