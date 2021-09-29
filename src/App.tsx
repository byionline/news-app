import React from 'react';
import { HomePage, Navbar, News } from './components';
import './App.css';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
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
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default App;
