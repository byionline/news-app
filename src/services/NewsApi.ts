import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const NewsApiHeader = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '30b937f665msh3651e199050d1c1p1b7431jsn8e3cc9e02c7c',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url: string) => ({
  url,
  headers: NewsApiHeader,
});
export const NewsApi = createApi({
  reducerPath: 'NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
// Redux toolkit create a Hook that call instantly to get the data loading state etc to make api call
export const {
  useGetNewsQuery, //name is same as getNews with use at start and Query at end
} = NewsApi;
