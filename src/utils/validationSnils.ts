import { checksum } from './checksum';

export function isValidSnils(snils: string): boolean {
    const snilsTextNumbers = snils.replace(/\D/g, '');

    if (!snilsTextNumbers.match(/^\d{11}/) && snilsTextNumbers < '001001999')
        return false;

    const currentHash = snilsTextNumbers.substr(9);
    const snilsNumbers = snilsTextNumbers.substr(0, 9).split('').map(Number);
    const hashSum = checksum(snilsNumbers);
    const hash = String(hashSum).padStart(2, '0');

    return currentHash === hash;
}
