import styles from './Button.module.scss';
import classNames from 'classnames/bind';

export interface ButtonProps {
    label: string;
    type?: 'primary' | 'secondary';
    full?: boolean;
}

export const Button = (props: ButtonProps) => {
    const { label, type = 'primary', full = false } = props;
    const cx = classNames.bind(styles);

    const componentClasses = cx(
        'button',
        `button--${type}`, {
        'button--full': full,
    });
    
    return (
        <button type="button" className={componentClasses}>
            { label }
        </button>
    );
}

export default Button;