import { NextResponse } from 'next/server';
import author from '@/app/utils/author';
import { getProductInfo, getProductDescription, getFormattedProductView, getBreadcrumbByCategory } from '@/app/utils/helpers';
import { NextApiResponse } from 'next';

interface paramsProps extends NextApiResponse {
    params: {
        id: string;
    }
}

export const GET = async ( request: Request, response: paramsProps ) => {
    // Get the URL params
    const { id: productId } = response.params;

    try {
        // Trying to get selected product info
        const productInfo = await getProductInfo(productId);
        const productDescription =  await getProductDescription(productId);

        if( productInfo && productDescription ){
            // Validate the API call retrieve the correct data
            const item = getFormattedProductView(productInfo, productDescription.plain_text);
            const categories = await getBreadcrumbByCategory(productInfo.category_id);
            
            // Return new the required format to the front
            return NextResponse.json({ author, item, categories });
        }

        // The API return false or error status
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    catch (error) {
        // Handle the error and send an error response
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}