import styles from './Breadcrumb.module.scss';
import ChevronRight from '../ChevronRight/ChevronRight';

export interface BreadcrumbProps {
    items: string[];
}

export const Breadcrumb = (props: BreadcrumbProps) => {
    const { items } = props;

    return (
        <ol className={styles.breadcrumb}>
            { items.map((item, i) => 
                <li key={i}>
                    { item }
                    { i < (items.length-1) ? <ChevronRight /> : null }
                </li>
            )}
        </ol>
    );
}

export default Breadcrumb;