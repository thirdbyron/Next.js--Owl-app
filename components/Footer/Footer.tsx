import { FooterProps } from './Footer.props';
import styles from './LayoutMain.module.css';
import cn from 'classnames';

export const Footer = ({...props }: FooterProps): JSX.Element => {
    return <footer {...props}>
        Footer
    </footer>;
};
