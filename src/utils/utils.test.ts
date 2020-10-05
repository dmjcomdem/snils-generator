import { generateSnils, isValidSnils, formatSnils } from './index';

describe('SNILS Validation Check', () => {
    let snils: string;

    it('should generate and to consist 11 characters', () => {
        snils = generateSnils();
        expect(snils).toHaveLength(11);
    });

    it('should generate snils match the checksum', () => {
        snils = generateSnils();
        expect(isValidSnils(snils)).toBe(true);
    });

    it('should match the checksum for 123-456-789 64', () => {
        expect(isValidSnils('123-456-789 64')).toBe(true);
    });

    it('should it match the mask "xxx–xxx–xxx xx"', () => {
        const mask = formatSnils(snils)!.replace(/\d/g, 'x');
        expect(mask).toBe('xxx–xxx–xxx xx');
    });
});
