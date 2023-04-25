import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Card} from "../../entities/Card";

// Define a service using a base URL and expected endpoints
export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery(
    { baseUrl: "https://react-http-6cdee-default-rtdb.firebaseio.com/" }
  ),
  endpoints: (builder) => ({
    getAlLCards: builder.query<Card[], void>({
      query: () => `/cards.json`,
    }),
    getCardById: builder.query<Card, string>({
      query: (id) => `/cards/${id}.json`,
    })
  }),
})

export const { useGetAlLCardsQuery, useGetCardByIdQuery } = cardsApi