import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:8080/api',
    baseUrl: 'https://java-react-auth-production.up.railway.app/api',
  }),
  tagTypes: ['Auth'],
  endpoints: () => ({}),
});
