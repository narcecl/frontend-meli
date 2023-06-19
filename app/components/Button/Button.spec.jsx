import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
	it('Default render', () => {
		// Define the label for the button
		const label = 'Button';

		// Render the component
		const { asFragment  } = render(
			<Button label={label} />
		);
		
		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check attributes, classnames and styles
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(label);
		expect(buttonElement).toHaveClass('button');
		expect(buttonElement).toHaveClass('button--primary');
		expect(buttonElement).not.toHaveClass('button--secondary');
		expect(buttonElement).not.toHaveClass('button--full');
	});

	it('Render with custom props', () => {
		// Define the label for the button
		const label = 'Button';

		// Render the component
		const { asFragment } = render(
			<Button label={label} type="secondary" full />
		);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check attributes, classnames and styles
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(label);
		expect(buttonElement).toHaveClass('button');
		expect(buttonElement).toHaveClass('button--secondary');
		expect(buttonElement).toHaveClass('button--full');
		expect(buttonElement).not.toHaveClass('button--primary');
	});
});
