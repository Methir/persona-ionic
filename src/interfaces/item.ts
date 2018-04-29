export interface Item{
    id: number,
    label: string,
    points: number,
    checked?: boolean,
    max?: number,
    min?: number,
    bonusKey?: string,
}