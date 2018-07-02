import { Item, Key, Power} from './';

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

    constructor(persona: Persona = null) {
        if(persona){
            this.id = persona.id||null;
            this.nome = persona.nome||'noob';
            this.np = persona.np||1;
        
            this.forca = persona.forca||10;
            this.destreza = persona.destreza||10;
            this.constituicao = persona.constituicao||10;
            this.inteligencia = persona.inteligencia||10;
            this.sabedoria = persona.sabedoria||10;
            this.carisma = persona.carisma||10;
            
            this.dano = persona.dano||0;
            this.ataque = persona.ataque||0;
            this.defesa = persona.defesa||0;
            this.vida = persona.vida||0;
            this.iniciativa = persona.iniciativa||0;
        
            this.resistencia = persona.resistencia||0;
            this.reflexo = persona.reflexo||0;
            this.fortitude = persona.fortitude||0;
            this.vontade = persona.vontade||0;
        
            this.feitos = persona.feitos||[];
            this.pericias = persona.pericias||[];
            this.poderes = persona.poderes||[];
        }
    }

    get bonusPoints() {
        return {    
            forca : Math.floor((this.forca-10)/2),
            destreza : Math.floor((this.destreza-10)/2),
            constituicao : Math.floor((this.constituicao-10)/2),
            inteligencia : Math.floor((this.inteligencia-10)/2),
            sabedoria : Math.floor((this.sabedoria-10)/2),
            carisma : Math.floor((this.carisma-10)/2),
        
            dano : (this.dano+(this.forca-10))/2,
            ataque : this.ataque/2,
            defesa : 10 + (this.defesa/2),
            vida : this.constituicao + (this.constituicao-10)/2 + this.vida + this.np,
            iniciativa : this.iniciativa + (this.destreza-10)/2,
        
            resistencia : this.resistencia + (this.constituicao-10)/2,
            reflexo : this.reflexo + (this.destreza-10)/2,
            fortitude : this.fortitude + (this.constituicao-10)/2,
            vontade : this.vontade + (this.sabedoria-10)/2,
        }
    }

    get abilityKeys(): Key[] {
        return [
            { label : "Força", name : "forca" },
            { label : "Destreza", name : "destreza" }, 
            { label : "Constituição", name : "constituicao" }, 
            { label : "Inteligência", name : "inteligencia" }, 
            { label : "Sabedoria", name : "sabedoria" }, 
            { label : "Carisma", name : "carisma" }
        ];
    }
    
    get combatKeys(): Key[] {
        return [
            { label : "Dano", name : "dano" },
            { label : "Ataque", name : "ataque" },
            { label : "Defesa", name : "defesa" },
            { label : "Vida", name : "vida" },
            { label : "Iniciativa", name : "iniciativa" },
        ];
    }
    
    get savingKeys(): Key[] {
        return [
            { label : "Resistência", name : "resistencia"},
            { label : "Reflexo", name : "reflexo"},
            { label : "Fortitude", name : "fortitude"},
            { label : "Vontade", name : "vontade"},
        ];
    }
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