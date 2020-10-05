export function checksum(snilsNumbers: number[]): number {
    // prettier-ignore
    return snilsNumbers
        .reduce((result: number, num: number, index: number) => result + num * (9 - index), 0) % 101 % 100;
}
