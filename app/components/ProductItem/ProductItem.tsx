import React from 'react';
import Link from "next/link";
import styles from './ProductItem.module.scss';
import { ProductItemProps } from '../../types/ProductItem.types';
import { formatCurrency } from '../../utils/helpers';
import freeShipping from '../../../assets/images/ic_shipping@2x.png';

export const ProductItem = (props: ProductItemProps) => {
    const { id, title, price, picture, free_shipping, address } = props;

    return (
        <div className={styles.MeliProductItem}>
            <div className="d-flex gap-16">
                <Link href={`items/${id}`} className="d-block">
                    <picture>
                        <img src={picture} alt={title} width={18} height={18} />
                    </picture>
                </Link>
                <div className={styles.MeliProductItem__content}>
                    <div className="w-100 w-sm-85 mb-32">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-8">
                                <span className="title--medium text--default d-block">
                                    { formatCurrency(price.amount) }
                                </span>
                                {
                                    free_shipping &&
                                    <picture>
                                        <img
                                            src={freeShipping.src}
                                            alt="Despacho gratis"
                                            title="Despacho gratis"
                                            width={18}
                                        />
                                    </picture>
                                }
                            </div>
                            <p className="body--small text--muted">{ address }</p>
                        </div>
                    </div>
                    <h2 className="body--medium text--default w-100 w-sm-50">
                        <Link href={`items/${id}`} className="d-inline-block">
                            { title }
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;