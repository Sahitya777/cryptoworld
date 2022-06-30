import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'x-rapidapi-host': "coinranking1.p.rapidapi.com",
  'x-rapidapi-key': "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",

};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl='https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query:(count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// const cryptoApiHeaders={
//     'X-RapidAPI-Key': 'aced111a56mshfb6d37960178185p11927bjsn0731e5eb3fb1',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// }

