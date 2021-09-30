import { Grid } from '@mui/material';

import { HomePage, Navbar, News } from './components';
import LeftSideBar from './components/LeftSideBar';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftSideBar />
        </Grid>
        <Grid item sm={10} xs={10}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
