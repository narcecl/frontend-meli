import { NextResponse } from 'next/server';
import author from '@/app/utils/author';
import { getProducts, getFormattedProductSearch, getBreadcrumb } from '@/app/utils/api';

interface QueryProps {
	url: URL;
}

export const GET = async (request: QueryProps) => {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    if( search ){
        try{
            const response = await getProducts(search);
            const { filters, available_filters, results } = response;

            const items = results.map((item: any) => getFormattedProductSearch(item));
            const categories = await getBreadcrumb(filters, available_filters);

            return NextResponse.json({ author, items, categories });
        }
        catch (error) {
            // Handle the error and send an error response
            return NextResponse.json({ error: 'Server error' }, { status: 500 });
        }
    }
    return NextResponse.json({ error: 'No params' }, { status: 400 });
}