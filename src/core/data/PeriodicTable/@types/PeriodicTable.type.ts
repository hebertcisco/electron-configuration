export type IGroups = {
    symbols: string[],
    names: string[],
    numbers: number[],
    category: string,
    period: number,
    group: number
}
export type TPeriodicTable = {
    groups: IGroups[];
}