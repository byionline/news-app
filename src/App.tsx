import { Grid, Box } from '@mui/material';
import { HomePage, Navbar, News } from './components';
import LeftSideBar from './components/LeftSideBar';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftSideBar />
        </Grid>
        <Grid item sm={10} xs={10}>
          <Box sx={{ ml: 2, mt: 10, mb: 5, mr: 2 }}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </> /*  <Grid container> <Grid item sm={2} xs={2}> <LeftSideBar /> </Grid> <Grid item sm={10} xs={10}> <Switch> <Route exact path="/"> <HomePage /> </Route> <Route exact path="/news"> <News /> </Route> </Switch> </Grid> </Grid> */
  );
};
export default App;
