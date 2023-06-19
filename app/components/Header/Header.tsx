'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import styles from './Header.module.scss';
import MercadoLibreLogo from '../../../assets/images/Logo_ML@2x.png';

import Search from '../Search/Search';

export const Header = () => {
    const searchParams = useSearchParams();
    const search = searchParams?.get('search') || '';
    const [ searchValue, setSearchValue ] = useState(search);

    return (
        <header className={styles.MeliHeader}>
            <div className="container">
                <div className="d-flex align-items-center gap-16">
                    <Link href="/">
                        <picture>
                            <img src={MercadoLibreLogo.src} alt="Logo MercadoLibre" width={48} />
                        </picture>
                    </Link>

                    <Search
                        value={searchValue}
                        onInput={setSearchValue}
                        placeholder="Nunca dejes de buscar"
                    />
                </div>
            </div>
        </header>  
    );
}

export default Header;