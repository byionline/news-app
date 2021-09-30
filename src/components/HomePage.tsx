import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { News } from '../components';

const { Title } = Typography;
const HomePage = () => {
  return (
    <>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/News">Show More</Link>
        </Title>
      </div>
      <News />
    </>
  );
};
export default HomePage;
