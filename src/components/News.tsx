import React from 'react';
import { useGetNewsQuery } from '../services/NewsApi';

const News = () => {
  const { data } = useGetNewsQuery({
    newsCategory: 'Sports',
    count: 10,
  });
  console.log(data);
  return <div>News</div>;
};
export default News;
