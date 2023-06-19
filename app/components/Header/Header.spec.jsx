import { render } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import '@testing-library/jest-dom';
import Header from './Header';

jest.mock('next/navigation', () => ({
	useSearchParams: jest.fn(),
}));

describe('Header', () => {
	it('renders the header component with search value from URL params', () => {
		// Mock the search value from URL params
		const mockSearchParams = new URLSearchParams('?search=query');
		useSearchParams.mockReturnValue(mockSearchParams);

		// Render the component
		const { container, asFragment } = render(<Header />);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check if the logo is rendered
		const logoElement = container.querySelector('img');
		expect(logoElement).toBeInTheDocument();

		// Check if the search input is rendered with correct value
		const searchInput = container.querySelector('input');
		expect(searchInput).toBeInTheDocument();
		expect(searchInput).toHaveValue('query');
	});

	it('renders the header component with empty search value when URL params are not present', () => {
		// Mock empty search value from URL params
		useSearchParams.mockReturnValue(null);

		// Render the component
		const { container, asFragment } = render(<Header />);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check if the logo is rendered
		const logoElement = container.querySelector('img');
		expect(logoElement).toBeInTheDocument();

		// Check if the search input is rendered with empty value
		const searchInput = container.querySelector('input');
		expect(searchInput).toBeInTheDocument();
		expect(searchInput).toHaveValue('');
	});
});
