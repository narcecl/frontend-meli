import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';

describe('Search', () => {
    it('Default render', () => {
        // Mock event
        const onInput = jest.fn();

        // Render the component
        const { container, asFragment } = render(
            <Search
                value=""
                onInput={onInput}
                placeholder="Nunca dejes de buscar"
            />
        );

        // Check first render
        const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

        // Check input and attributes
        const input = container.querySelector('input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('placeholder', 'Nunca dejes de buscar');
    });

    it('Test onInput', () => {
        // Mock event
        const mockFn = jest.fn();

        // Render the component
        const { container, asFragment } = render(
            <Search
                value=""
                onInput={mockFn}
                placeholder="Nunca dejes de buscar"
            />
        );

        // Check first render
        const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();
        
        // Check input and attributes
        const input = container.querySelector('input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('placeholder', 'Nunca dejes de buscar');
        
        // Check mocked onInput event
        fireEvent.input(input, { target: { value: 'new value' } });
        expect(mockFn).toHaveBeenLastCalledWith('new value');
    })
});