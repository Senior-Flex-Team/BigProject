import { type FC } from 'react';
import { CardFeedContainer } from './components/card-feed-container';
import { Header } from './components/header';

import { Index } from './page/create-new-card';

export const App: FC = () => {
  return (
    <>
      {/* <CardFeedContainer /> */}
      {/* <Header /> */}
      <Index />
    </>
  );
};
