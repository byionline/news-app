import { Container, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { News } from '../components';
const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const HomePage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <News />
    </Container>
  );
};
export default HomePage;
