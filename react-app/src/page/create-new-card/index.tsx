import { type FC } from 'react';

import { HeaderWithoutDelimiter } from './header-without-delimeter';
import { NewCardContent } from './new-card-content';

export const Index: FC = () => {
  return (
    <>
      <HeaderWithoutDelimiter></HeaderWithoutDelimiter>
      <NewCardContent />
    </>
  );
};
