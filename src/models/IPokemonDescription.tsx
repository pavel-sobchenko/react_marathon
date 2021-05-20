export interface IStatistic {
    [i: string]: number;
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
