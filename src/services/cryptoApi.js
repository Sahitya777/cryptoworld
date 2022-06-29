import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'x-rapidapi-host': "coinranking1.p.rapidapi.com",
  'x-rapidapi-key': "aced111a56mshfb6d37960178185p11927bjsn0731e5eb3fb1",

};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl='https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query:(count) => createRequest(`/coins?limit=${count}`),
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;

// const cryptoApiHeaders={
//     'X-RapidAPI-Key': 'aced111a56mshfb6d37960178185p11927bjsn0731e5eb3fb1',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// }

