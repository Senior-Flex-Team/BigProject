import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type ICard } from '../../entities/card';

// Define a service using a base URL and expected endpoints
export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-http-6cdee-default-rtdb.firebaseio.com/',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAlLCards: builder.query<ICard[], void>({
      query: () => `/cards.json`,
    }),
    getCardById: builder.query<ICard, string>({
      query: (id) => `/cards/${id}.json`,
    }),
  }),
});

export const { useGetAlLCardsQuery, useGetCardByIdQuery } = cardsApi;
