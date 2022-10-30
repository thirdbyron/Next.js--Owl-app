import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
    size = 's',
    children,
    className,
    color = 'ghost',
    href,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size === 's',
                [styles.medium]: size === 'm',
                [styles.grey]: color === 'grey',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
                [styles.ghost]: color === 'ghost',
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
