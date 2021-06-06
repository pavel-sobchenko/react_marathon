/**
 * @jest-environment jsdom
 */
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import {act} from 'react-dom/test-utils'
import Heading from './index';

describe('Heading', () => {
    let container: Element | null = null;

    beforeEach(() => {
        container = window.document.createElement('div');
        window.document.body.appendChild(container);
    });

    afterEach(() => {
        if (container !== null) {
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        }
    });

    it('render', () => {
        act(() => {
            render (<Heading scale={'h1'}/>, container);
        });
        console.log(container?.innerHTML);
        expect(container?.innerHTML).toBeDefined();
    });

    it('render with children', () => {
        act(() => {
            render (<Heading scale={'h1'}> Title </Heading>, container);
        });
        expect(container?.textContent).toEqual('Title');
    });

    it('render with props h2', () => {
        act(() => {
            render (<Heading scale={'h2'}> Title </Heading>, container);
        });
        expect(container?.querySelector('h2')).not.toBeNull();
    });
});
