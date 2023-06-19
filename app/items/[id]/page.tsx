import { Metadata } from 'next';
import { formatCurrency } from '@/app/utils/helpers';
import { getMetadata } from '@/app/utils/metadata';
import styles from './single.module.scss';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Button from '@/app/components/Button/Button';
import ErrorImage from '@/app/components/ErrorImage/ErrorImage';

interface detailsProps {
    params: { id: string; },
}

const getProductInfo = async (ID: string) => {
    return await fetch(`http://localhost:3000/api/items/${ID}`, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        if( 'error' in data ) return false;
        return data;
    });
}

export async function generateMetadata(props: detailsProps): Promise<Metadata> {
    const { params } = props;
    const productInfo = await getProductInfo(params.id);

    // Product not found
    if( !productInfo ) return getMetadata({ title: 'Producto no encontrado' });

    // Return metadata's product
    const { item } = productInfo;
    return getMetadata({title: item.title, description: item.description });
}

export default async function ItemsDetails(props: detailsProps) {
    const { params } = props;
    const productInfo = await getProductInfo(params.id);
    const { item, categories } = productInfo;

    return (
        <>
            { productInfo ?
            <section>
                <div className="container">
                    <Breadcrumb items={categories} />

                    <div className="section--inner p-32">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <picture className={styles.single__picture}>
                                    <img src={item.picture } alt={item.title} />
                                </picture>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p className="body--small d-block mb-16">
                                    { item.condition } - { item.sold_quantity } vendidos
                                </p>
                                <h1 className="title--medium text--default fw--semibold mb-32">
                                    { item.title }
                                </h1>
                                <p className="title--xlarge text--default">
                                    { formatCurrency(item.price.amount) }
                                    <span style={{
                                        fontSize: '1.4rem',
                                        verticalAlign: 'super',
                                        display: 'inline-block'
                                    }}>
                                        { item.price.decimals }
                                    </span>
                                </p>

                                <div className="d-flex flex-column gap-8 mt-32">
                                    <Button label="Comprar" full />
                                </div>
                            </div>
                        </div>
                        
                        { item.description &&
                        <div className="mt-32">
                            <h2 className="title--medium mb-32">Descripción del producto</h2>
                            <p>{ item.description }</p>
                        </div>
                        }
                    </div>
                </div>
            </section>
            :
            <section>
                <div className="container">
                    <div className="section--inner mt-16 p-32">
                        <div className="text-center">
                            <ErrorImage />

                            <h2 className="mt-32 title--medium">Producto no encontrado</h2>
                            <p>Parece que el producto que buscas no existe.</p>
                        </div>
                    </div>
                </div>
            </section>
        }
        </>
	);
}
