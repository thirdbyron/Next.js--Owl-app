import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
    size = 'm',
    children,
    className,
    ...props
}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.paragraph, className, {
                [styles.small]: size === 's',
                [styles.medium]: size === 'm',
                [styles.large]: size === 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};
