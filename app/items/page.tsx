import { Metadata } from 'next';
import { getMetadata } from '@/app/utils/metadata';
import ProductItem from '../components/ProductItem/ProductItem';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { ProductItemProps } from '../types/ProductItem.types';

type detailsProps = {
    searchParams: { [key: string]: string }
}

const getProducts = async (query: string) => {
	if( !query ) return false;
	return await fetch(`http://localhost:3000/api/items?search=${query}`, { method: 'GET' })
	.then(response => response.json())
    .then(data => {
        if( 'error' in data ) return false;
        return data;
    });
}

export function generateMetadata({ searchParams }: detailsProps): Metadata {
	// Generate metadata based on params (if exists)
    const { search } = searchParams;
    return getMetadata({ title: search || 'Búsqueda' });
}

export default async function Item(pageProps: detailsProps){
	const { searchParams } = pageProps;
	const products = await getProducts(searchParams.search);
	const { items, categories } = products;

	return (
		products &&
		<section>
			<div className="container">
				<Breadcrumb items={categories} />

				<div className="section--inner p-16">
					{ items?.length ?
						<ul>
							{ items.map((item: ProductItemProps, i: number) => 
								<ProductItem key={i} {...item} />
							)}
						</ul>
					: null }
				</div>
			</div>
		</section>
	)
}
