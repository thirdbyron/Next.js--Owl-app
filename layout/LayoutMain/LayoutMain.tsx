import { LayoutMainProps } from './LayoutMain.props';
import { Header, Sidebar, Footer } from '../../components';

export const LayoutMain = ({ children }: LayoutMainProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
};


