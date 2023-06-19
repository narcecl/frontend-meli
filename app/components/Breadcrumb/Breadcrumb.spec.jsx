import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
	it('Default render', () => {
		// Define the items for the breadcrumb
		const items = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

		// Render the component
		const { container, asFragment } = render(
			<Breadcrumb items={items} />
		);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check if the breadcrumb items are rendered correctly
		const breadcrumbItems = screen.getAllByRole('listitem');
		expect(breadcrumbItems).toHaveLength(items.length);

		for( let i = 0; i < items.length; i++ ){
			// Check if breadcrumb item match the element from array
			const breadcrumbItem = breadcrumbItems[i];
			expect(breadcrumbItem).toHaveTextContent(items[i]);
		}

		// Check the presence of ChevronRight for all items except the last one
		const chevronRights = container.querySelectorAll('svg');
		expect(chevronRights).toHaveLength(items.length - 1);
	});

	it('Renders with no items', () => {
		// Render the component with no items
		const { container, asFragment } = render(<Breadcrumb items={[]} />);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Assert no breadcrumb items are rendered
		const breadcrumbItems = screen.queryAllByRole('listitem');
		expect(breadcrumbItems).toHaveLength(0);

		// Assert no ChevronRight is rendered
		const chevronRights = container.querySelectorAll('svg');
		expect(chevronRights).toHaveLength(0);
	});
});
