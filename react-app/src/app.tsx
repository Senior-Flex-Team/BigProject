import { type FC } from 'react';

import { CardFeedContainer } from './components/card-feed-container';
import { Header } from './components/header';
import Dropdown from './components/dropdown';

export const App: FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <CardFeedContainer /> */}
      <Dropdown />
    </>
  );
};
