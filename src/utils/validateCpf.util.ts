import { sum, turnStringTypeInNumber } from './consts.utils';

export class ValidateCPF {
    async removeFormation(cpf: string): Promise<string> {
        const onlyNumbers = cpf.replace(/[^\d]/g, '');
        return onlyNumbers;
    }

    async checkIsRepeated(cpf: string): Promise<boolean> {
        const firstNumber = cpf[0];
        const isRepeatedNumber = RegExp(`^${firstNumber}+$`);

        return isRepeatedNumber.test(cpf);
    }

    async checkSize(cpf: string): Promise<boolean> {
        const isCPFSize = RegExp(/^(\d{11})$/);

        return isCPFSize.test(cpf);
    }

    async separeVerifyingDigitAndNumbers(
        cpf: string,
    ): Promise<{ allNumbers: string; numbersWithOutDv: string; verifyingDigit: string }> {
        const [allNumbers, numbersWithOutDv, verifyingDigit] = cpf.match(
            /^(\d{9})(\d{2})$/,
        );
        return { allNumbers, numbersWithOutDv, verifyingDigit };
    }

    async calculateVerifyingDigit(numbersWithOutDv: string): Promise<number> {
        const turnInArrayAndReverseOrder = Array.from(numbersWithOutDv).reverse();
        return turnInArrayAndReverseOrder
            .map((num, i) => turnStringTypeInNumber(num) * (9 - (i % 10)))
            .reduce(sum);
    }

    async validateVerifyingDigit(
        numbersWithOutDv: string,
        verifyingDigit: string,
    ): Promise<boolean> {
        const calculateFirstVerifyingDigit =
            ((await this.calculateVerifyingDigit(numbersWithOutDv)) % 11) % 10;

        const calculateSecondVerifyingDigit =
            (((await this.calculateVerifyingDigit(`${numbersWithOutDv}0`)) +
                calculateFirstVerifyingDigit * 9) %
                11) %
            10;

        const unificateVerifyingDigitsResult =
            calculateFirstVerifyingDigit + '' + calculateSecondVerifyingDigit;

        const checkIsValid = unificateVerifyingDigitsResult === verifyingDigit;

        return checkIsValid;
    }

    async isValidCpf(cpf: string): Promise<boolean> {
        const isRepeated = await this.checkIsRepeated(cpf);
        const isCPFSize = await this.checkSize(cpf);
        if (isRepeated || !isCPFSize) return false;
        const {
            allNumbers,
            numbersWithOutDv,
            verifyingDigit,
        } = await this.separeVerifyingDigitAndNumbers(cpf);
        const validateCpf = this.validateVerifyingDigit(numbersWithOutDv, verifyingDigit);

        return validateCpf;
    }
}

