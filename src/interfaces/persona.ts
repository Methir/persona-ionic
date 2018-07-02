export class Persona implements Persona{
    nome: string ='noob';
    np: number = 1;

    forca: number = 10;
    destreza: number = 10;
    constituicao: number = 10;
    inteligencia: number = 10;
    sabedoria: number = 10;
    carisma: number = 10;
    
    dano: number = 0;
    ataque: number = 0;
    defesa: number = 0;
    vida: number = 0;
    iniciativa: number = 0;

    resistencia: number = 0;
    reflexo: number = 0;
    fortitude: number = 0;
    vontade: number = 0;

    feitos: Item[] = [];
    pericias: Item[] = [];
    poderes: Power[] = [];
}

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
    poderes: Power[],
}

export interface Item{
    id: number,
    nome: string,
    graduacao: number,
    checked: boolean,
    graduacao_max?: number,
    graduacao_min?: number,
    habilidade_chave?: string,
}

export interface Power {
    poder_id: number,
    nome: string,
    efeito: string,
    acao: string,
    alcance: string,
    duracao: string,
    salvamento: string,
    custo_min: number,
    custo_max: number,
    custo: number,
    checked: boolean,
    graduacao: number,
    extras: PowerOption[],
    falhas: PowerOption[]
}

export interface PowerOption {
    id: number,
    nome: string,
    modificador: number,
    modificador_min: number,
    modificador_max: number,
    modificadores: number[],
    checked: boolean

}