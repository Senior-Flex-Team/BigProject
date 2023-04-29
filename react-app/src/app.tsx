import { type FC } from 'react';

import { CardFeedContainer } from './components/card-feed-container';
import { Header } from './components/header';

export const App: FC = () => {
    return (
        <>
            <Header />
            <CardFeedContainer />
        </>
    );
};
