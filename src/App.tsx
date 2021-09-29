import React from 'react';
import { HomePage, Navbar, News } from './components';

import './App.css';
import { Layout, Space, Typography } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
const { Title } = Typography;
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            News <br />
            All rights reserved
          </Title>
          <Space>
            <Link to="/">Home</Link>

            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default App;
