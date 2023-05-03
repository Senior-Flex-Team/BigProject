import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type ICard } from '../../entities/card';

// Define a service using a base URL and expected endpoints
export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8088/',
    }),
    endpoints: (builder) => ({
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        getAlLCards: builder.query<ICard[], void>({
            query: () => `/Card/GetAllCards`,
        }),
        getCardById: builder.query<ICard, string>({
            query: (id) => `/Card/GetCardById?id=${id}`,
        }),
    }),
});

export const { useGetAlLCardsQuery, useGetCardByIdQuery } = cardsApi;
