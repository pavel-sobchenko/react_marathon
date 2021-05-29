import React, { PropsWithChildren } from 'react';
import HomePage from './src/pages/Home';
import EmptyPage from './src/components/EmptyPage';
import Pokedex from './src/pages/Pokedex';
import Pokemon, { PokemonProps } from './src/pages/Pokemon';

interface IGeneralMenu {
    title: string;
    link: LinkEnum;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokedex/:id'
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage/>
    },
    {
        title: 'Pokedex',
        link: LinkEnum.POKEDEX,
        component: () => <Pokedex title="Pokedex"/>

    },
    {
        title: 'Legendaries',
        link: LinkEnum.LEGENDARIES,
        component: () => <EmptyPage title="Legendaries"/>

    },
    {
        title: 'Documentation',
        link: LinkEnum.DOCUMENTATION,
        component: () => <EmptyPage title="Documentation"/>

    }
];

const SECOND_ROUTES: IGeneralMenu[] = [{
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({id}: PokemonProps) => <Pokemon id={id}/>
}];

interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;
