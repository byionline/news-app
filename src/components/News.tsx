import { Card, Col, Row, Typography } from 'antd';
import moment from 'moment';
import React from 'react';
import { useGetNewsQuery } from '../services/NewsApi';
import Loader from './Loader';
const { Title, Text } = Typography;

const News = () => {
  const { data } = useGetNewsQuery({
    newsCategory: 'Sports',
    count: 10,
  });
  console.log(data);
  if (!data?.value) return <Loader />;
  return (
    <>
      <Row gutter={[24, 24]}>
        {data.value.map(
          (
            news: {
              url: string;
              name: string;
              description: string;
              datePublished: string;

              image: {
                thumbnail: {
                  contentUrl?: string;
                };
              };
              provider: {
                name: string;
                image: {
                  thumbnail: {
                    contentUrl?: string;
                  };
                };
              };
            },
            index: React.Key | null | undefined
          ) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news.name}
                    </Title>
                    <img
                      style={{ maxHeight: '100px', maxWidth: '200px' }}
                      src={news?.image?.thumbnail?.contentUrl}
                      alt="news"
                    />
                  </div>
                  <p>{news.description}</p>
                  <div className="provider-container">
                    <Text>{moment(news.datePublished).fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
export default News;
