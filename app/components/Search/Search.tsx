import React from 'react';
import styles from './Search.module.scss';

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
            />
        </form>
    );
}

export default Search;