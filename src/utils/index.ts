import { ValidateCNPJ } from './validateCnpj.util';
import { ValidateCPF } from './validateCpf.util';
import { ValidateEmail } from './validateEmail.util';

const validateCPF = new ValidateCPF();
const validateCNPJ = new ValidateCNPJ();
const validateEmail = new ValidateEmail();

export { validateCNPJ, validateCPF, validateEmail };
