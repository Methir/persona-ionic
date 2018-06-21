import { Item } from ".";

export interface Persona {
    id?: number,
    nome: string,
    np: number,

    forca: number,
    destreza: number,
    constituicao: number,
    inteligencia: number,
    sabedoria: number,
    carisma: number,

    dano: number,
    ataque: number,
    defesa: number,
    vida: number,
    iniciativa: number,

    resistencia: number,
    reflexo: number,
    fortitude: number,
    vontade: number,

    pericias: Item[],
    feitos: Item[],
    poderes: any[],
}