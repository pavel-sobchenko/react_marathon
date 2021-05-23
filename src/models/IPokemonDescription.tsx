export interface IStatistic {
    hp: number;
    attack: number;
    defense: number;
    ["special-attack"]: number;
    ["special-defense"]: number;
    speed: number;
}

export interface IPokemonDescription {
    name_clean: string;
    abilities: string[];
    stats: IStatistic;
    types: string[];
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    order: number;
    weight: number;
}
