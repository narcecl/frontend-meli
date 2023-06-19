import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { formatCurrency } from '../../utils/helpers';
import ProductItem from './ProductItem';

const placeholderData = {
	id: 'MLA1149502467',
	title: 'Figura De Acción Tanjiro Kamado 49010 De Funko Pop! Animation',
	price: { currency: 'ARS', amount: 3399, decimals: 0 },
	picture: 'http://http2.mlstatic.com/D_744432-MLA52222036808_102022-I.jpg',
	condition: 'Nuevo',
	free_shipping: false,
	address: 'Capital Federal',
};

describe('ProductItem', () => {
	it('Default render', () => {
		// Render the component
		const { container, asFragment } = render(
			<ProductItem {...placeholderData} />
		);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check if the title and link
		const title = container.querySelector('h2');
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent(placeholderData.title);
		const titleLink = title.querySelector('a');
		expect(titleLink).toBeInTheDocument();
		expect(titleLink).toHaveAttribute('href', `items/${placeholderData.id}`);

		// Check the price is rendered with correct format
		const formattedPrice = formatCurrency(placeholderData.price.amount);
		const priceElement = screen.getByText(formattedPrice);
		expect(priceElement).toBeInTheDocument();

		// Check the address is rendered
		const addressElement = screen.getByText(placeholderData.address);
		expect(addressElement).toBeInTheDocument();

		// Check the picture is rendered with correct source and alt
		const pictureElement = screen.getByRole('img', { name: placeholderData.title });
		expect(pictureElement).toBeInTheDocument();
		expect(pictureElement).toHaveAttribute('src', placeholderData.picture);
		expect(pictureElement).toHaveAttribute('alt', placeholderData.title);

		// Check the free shipping icon is not rendered
		const freeShippingIcon = screen.queryByAltText('Despacho gratis');
		expect(freeShippingIcon).not.toBeInTheDocument();
	});

	it('Render with free shipping prop', () => {
		// Render the component
		const { container, asFragment } = render(
			<ProductItem
				{...placeholderData}
				free_shipping={true}
			/>
		);

		// Check first render
		const firstRender = asFragment();
        expect(firstRender).toMatchSnapshot();

		// Check if the title and link
		const title = container.querySelector('h2');
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent(placeholderData.title);
		const titleLink = title.querySelector('a');
		expect(titleLink).toBeInTheDocument();
		expect(titleLink).toHaveAttribute('href', `items/${placeholderData.id}`);

		// Check the price is rendered with correct format
		const formattedPrice = formatCurrency(placeholderData.price.amount);
		const priceElement = screen.getByText(formattedPrice);
		expect(priceElement).toBeInTheDocument();

		// Check the address is rendered
		const addressElement = screen.getByText(placeholderData.address);
		expect(addressElement).toBeInTheDocument();

		// Check the picture is rendered with correct source and alt
		const pictureElement = screen.getByRole('img', { name: placeholderData.title });
		expect(pictureElement).toBeInTheDocument();
		expect(pictureElement).toHaveAttribute('src', placeholderData.picture);
		expect(pictureElement).toHaveAttribute('alt', placeholderData.title);

		// Check the free shipping icon is not rendered
		const freeShippingIcon = screen.queryByAltText('Despacho gratis');
		expect(freeShippingIcon).toBeInTheDocument();
	});
});
