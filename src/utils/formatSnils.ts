// prettier-ignore
export function formatSnils(snils: string): string | null {
    if (!snils) return null;
    return 'xxx–xxx–xxx xx'.replace(/x/g,
        ((n) => (s: string) => (): string => s[(n += 1)])(-1)(snils));
}
