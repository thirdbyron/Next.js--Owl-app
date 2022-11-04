import { FunctionComponent } from 'react';

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>,
    Layout: React.ElementType
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
};
