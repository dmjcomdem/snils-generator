import { checksum } from './checksum';

export function generateSnils(): string {
    let snilsText: string;
    let hash: string;

    function calculateSnilsHash(snils: string): string {
        const snilsTextNumbers = snils.replace(/\D/g, '');

        if (!snilsTextNumbers.match(/^\d{9}/) && snilsTextNumbers < '001001999')
            return '';

        const snilsNumbers = snilsTextNumbers
            .substr(0, 9)
            .split('')
            .map(Number);

        const snilsHashSum = checksum(snilsNumbers);
        return String(snilsHashSum).padStart(2, '0');
    }

    do {
        snilsText = 'xxxxxxxxx'.replace(/x/g, () =>
            String(Math.floor(Math.random() * 10))
        );
        hash = calculateSnilsHash(snilsText);
    } while (!hash);

    snilsText += hash;
    return snilsText;
}
