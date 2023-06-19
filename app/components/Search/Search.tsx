import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../../assets/images/ic_Search@2x.png';

export interface SearchProps {
    value: string;
    placeholder?: string;
    onInput: (value: string) => void;
}

export const Search = (props: SearchProps) => {
    const { value, placeholder, onInput } = props;

    const handleInput = (e: any): void => {
        onInput(e.target.value);
    }

    return (
        <form action="/items" method="GET" className={styles.MeliSearch}>
            <input
                className={styles.MeliSearch__input}
                onInput={handleInput}
                value={value}
                name="search"
                placeholder={placeholder}
            />
            <button
                className={styles.MeliSearch__button}
                aria-label="Buscar"
                type="submit"
                style={{
                    background: `#eee url('${searchIcon.src}') center / 18px no-repeat`
                }}
            />
        </form>
    );
}

export default Search;