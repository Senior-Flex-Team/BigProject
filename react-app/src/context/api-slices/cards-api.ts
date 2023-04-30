import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACKEND_URL } from '../../CONST_VALUES';
import {Card} from "../../entities/Card";

// Define a service using a base URL and expected endpoints
export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery(
    //{ baseUrl: "https://react-http-6cdee-default-rtdb.firebaseio.com/" }
      { baseUrl: BACKEND_URL }
  ),
  endpoints: (builder) => ({
    getAllCards: builder.query<Card[], void>({
      query: () => `/cards.json`,
    }),
    getCardById: builder.query<Card, string>({
      query: (id) => `/cards/${id}.json`,
    })
  }),
})

export const { useGetAllCardsQuery, useGetCardByIdQuery } = cardsApi